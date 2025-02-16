import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Profile, LandingPage, Service } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes path='/' element={<LandingPage />}>
                <Route index path="/" element={<LandingPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/service" element={<Service />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
