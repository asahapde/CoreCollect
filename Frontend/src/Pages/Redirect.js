import { useNavigate } from "react-router-dom";
function Redirect() {
    const navigate = useNavigate();
    return (
        <div
            onLoad={() => {
                navigate("/home");
            }}
        ></div>
    );
}
export default Redirect;
