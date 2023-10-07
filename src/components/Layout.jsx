import React from "react";
import { Outlet } from "react-router-dom"
import HeaderPage from "./Header";
import FooterPage from "./Footer";

export default function LayoutPage(){

    return (
        <div>
            <HeaderPage/>
            <main>
                <Outlet/>
            </main>
            <FooterPage/>
        </div>
    )
}
