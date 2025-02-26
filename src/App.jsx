import React from "react";
import { Header, Footer } from "./components";
import { AuthProvider } from "./provider/authProvider";
import { Routes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes />
      <Footer />
      <div className="h-dvh">hey</div>
      <div className="h-dvh">1</div>
      <div className="h-dvh">2</div>
    </AuthProvider>
  );
}

export default App;
