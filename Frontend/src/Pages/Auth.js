import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider,
    useNavigate,
} from "react-router-dom";
import "../App.css";
const Auth = () => {
    return (
        <div className=" bg-gray-100 flex flex-row flex-1 h-screen">
            <div className=" w-2/3 flex justify-center items-center flex-col">
                <div
                    className="w-96 h-96 bg-contain bg-no-repeat bg-center"
                    style={{
                        backgroundImage:
                            'url("/undraw_web_shopping_re_owap.svg")',
                    }}
                ></div>

                <div className="font-semibold text-lg mb-1">
                    Browse the Catalog
                </div>
                <div className="w-96 text-center">
                    Browse a catalog of hundreds of items ranging from sporting
                    goods to old antiques. Any thing a collector could desire.
                </div>
                <div className=" mt-12 flex flex-row gap-2 justify-center items-center">
                    <div className="w-5 h-5 flex justify-center items-center cursor-pointer mr-2 text-lg hover:text-orange-600">
                        <IoChevronBack />
                    </div>

                    <div className="h-3 w-3 rounded-full bg-orange-600" />
                    <div className="h-3 w-3 rounded-full bg-orange-600 bg-opacity-25" />
                    <div className="h-3 w-3 rounded-full bg-orange-600 bg-opacity-25" />

                    <div className="w-5 h-5 flex justify-center items-center cursor-pointer ml-2 text-lg hover:text-orange-600">
                        <IoChevronForward />
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Auth;
