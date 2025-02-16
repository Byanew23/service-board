import React from "react";
import { Header, Footer } from "./components";
import { AuthProvider } from "./provider/authProvider";
import { Routes } from './routes'


function App() {
    return (
        <AuthProvider>
            <Header />
            <Routes />
            <Footer />
        </AuthProvider>
    );
}

export default App;
