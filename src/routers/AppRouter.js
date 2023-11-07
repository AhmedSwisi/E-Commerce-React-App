import React from "react";
import SignUpPage from "../components/SignUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import LoginPage from "../components/LoginPage";
import Home from "../components/Home";
import AuthDetails from "../components/AuthDetails";
import theme from "../styles/Theme";
import { ThemeProvider } from "@mui/material";
import NotFoundPage from "../components/NotFoundPage";
import NavBar from "../components/NavBar";

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <ThemeProvider theme={theme}>
            <NavBar />
            <Routes>
                <Route path ="/"element ={<Home />}/>
                <Route path = "/signup" element = {<SignUpPage />}/>
                <Route path = "/login" element = {<LoginPage />}/>
                <Route path = "/test" element = {<AuthDetails />}/>
                <Route path = '*' element ={<NotFoundPage />}/>
            </Routes> 
        </ThemeProvider>
        </div>
    </BrowserRouter>
)

export default AppRouter;