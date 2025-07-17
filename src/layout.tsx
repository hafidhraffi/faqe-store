import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Outlet />
        </>
    );
}

export default Layout;
