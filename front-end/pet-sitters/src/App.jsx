import { useState } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Cuidadores from "./components/Cuidadores";

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/inicio" replace />}
                    />
                    <Route path="/inicio" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cuidadores" element={<Cuidadores />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
