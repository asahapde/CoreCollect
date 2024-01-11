const authRoutes = require("express").Router();

const serviceAccount = require("../serviceKey.json");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const { db, fireapp, admin } = require("../firebase");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const auth = getAuth();

authRoutes.post("/login", async (req, res) => {
    //req.body.user contains email or password
    if (!req.body.user || req.body.user.trim() == "")
        return res.send({ err: "You must provide a username or an email" });
    if (!req.body.password || req.body.password.trim() == "")
        return res.send({ err: "You must provide a password" });

    let email;
    let password = req.body.password;

    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();
    const usernameSnapshot = await usersRef
        .where("username", "==", req.body.user)
        .get();

    let usernameAccount =
        usernameSnapshot.docs.length > 0
            ? usernameSnapshot.docs[0].data()
            : null;

    if (usernameAccount) email = usernameAccount.email;
    else email = req.body.user;

    //Check if the email and password are correct
    signInWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
            const userSnapshot = await usersRef
                .where("uuid", "==", user.user.uid)
                .get();
            let userAccount =
                userSnapshot.docs.length > 0
                    ? userSnapshot.docs[0].data()
                    : null;

            try {
                //If the email and password are correct
                //Send a JWT token with a signed userId
                if (userAccount)
                    jwt.sign(
                        { user: user.user.uid },
                        process.env.JWT_SECRET,
                        (err, token) => {
                            res.json({ token: token });
                        }
                    );
                //If there is user profile in the database send error
                else res.status(401).json({ err: "Account not created" });
                return;
            } catch (err) {
                //Any database error
                return res.status(500).send({ err: err });
            }
        })
        .catch((err) => {
            //If the email and password are not correct
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                    res.status(400).send({ err: err.message });
                    break;
                case "auth/user-not-found":
                case "auth/wrong-password":
                    res.status(400).send({
                        err: "Either the email or the password you provided are wrong",
                    });
            }
            return;
        });
});

authRoutes.post("/signup", async (req, res) => {
    //Validation Schema for the input parameters
    const schema = Joi.object({
        username: Joi.string().max(50).required(),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),
        password: Joi.string().max(50).required(),
    });

    const result = schema.validate(req.body);

    //Error if the validation fails
    if (result.error) {
        return res.status(400).send({ err: result.error.details[0].message });
    }

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    try {
        //Check if username or email already exists
        const usernameSnapshot = await usersRef
            .where("username", "==", username)
            .get();
        let usernameAccount =
            usernameSnapshot.docs.length > 0
                ? usernameSnapshot.docs[0].data()
                : null;

        const emailSnapshot = await usersRef.where("email", "==", email).get();

        let emailAccount =
            emailSnapshot.docs.length > 0 ? emailSnapshot.docs[0].data() : null;

        if (emailAccount) {
            //If a user with the email already exists send an error
            return res.status(400).send({
                err: "A user with this email already exists",
            });
        }
        if (usernameAccount) {
            //If a user with the username already exists send an error
            return res.status(400).send({
                err: "A user with this username already exists",
            });
        }

        //Create Firebase auth record
        admin
            .auth()
            .createUser({
                email: email,
                password: password,
                displayName: username,
            })
            .then(async (userInfo) => {
                try {
                    //Create a new user record in the database
                    const nuser = {
                        uuid: userInfo.uid,
                        username: username,
                        email: email,
                    };

                    db.collection("users").doc(userInfo.uid).set(nuser);

                    //Once the user record is saved in the database, send a JWT token with the signed userId
                    jwt.sign(
                        { user: userInfo.uid },
                        process.env.JWT_SECRET,
                        (err, token) => {
                            res.json({ token: token });
                        }
                    );
                } catch (err) {
                    //Any database error
                    console.log(err);
                    return res.status(400).send({
                        err: err,
                    });
                }
            })
            .catch((err) => {
                //Any Firebase Auth error
                return res.status(400).send({ error: err });
            });
    } catch (err) {
        //Any database error
        console.log(err);
        return res.status(400).send({
            err: err,
        });
    }
});

//Returns a userId if the token is correct and returns null if it isn't
function verifyToken(token) {
    let verified;
    jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
        if (!err) verified = authData;
    });

    return verified;
}

async function verifyUser(req, res, next) {
    //Return an error if no credentials are sent
    if (!req.headers.authorization) {
        return res.status(401).send({ error: "No credentials sent!" });
    }

    let token = req.headers.authorization;

    //Return an error if verifyToken returns null
    let authData = verifyToken(token);
    if (!authData) {
        res.sendStatus(401);
        return;
    }

    //Attach the authData to the request if verifyToken passes
    req.authData = authData;

    next();
}

module.exports = { authRoutes, verifyUser };
