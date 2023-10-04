import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="grid place-items-center h-[100vh]">
            <div className="text-center flex flex-col gap-10">
                <h1 className="text-5xl">Error 404</h1>
                <Link to='../'><button className="btn btn-primary">Go back</button></Link>
            </div>
        </div>
    );
};

export default Error;