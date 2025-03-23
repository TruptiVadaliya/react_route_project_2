import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Error Page</h1>
            <p>{error?.statusText || error?.message}</p>
            <NavLink to="/"><button>Go Back</button></NavLink>
        </div>
    );
};