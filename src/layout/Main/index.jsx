import { Outlet } from "react-router"
import { Navbar } from "../Navbar"
import { Sidebar } from "../Sidebar"
import { MainLayoutWrapper } from "./Main.styles"

export const Main = (props) => {
    return (
        <MainLayoutWrapper>
            <Sidebar></Sidebar>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </MainLayoutWrapper>
    )
}