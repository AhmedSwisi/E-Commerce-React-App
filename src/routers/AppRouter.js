import React from "react";
import SignUpPage from "../components/SignUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "../components/ProductPage";
import LoginPage from "../components/LoginPage";
import ShopPage from "../components/ShopPage";
import Home from "../components/Home";
import AuthDetails from "../components/AuthDetails";
import theme from "../styles/Theme";
import { ThemeProvider } from "@mui/material";
import NotFoundPage from "../components/NotFoundPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
                <Route path = '/product' element ={<ProductPage />}/>
                <Route path = '/shop' element ={<ShopPage />}/>
                <Route path = '*' element ={<NotFoundPage />}/>
            </Routes> 
            <Footer />
        </ThemeProvider>
        </div>
    </BrowserRouter>
)

export default AppRouter;