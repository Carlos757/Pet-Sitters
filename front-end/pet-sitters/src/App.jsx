import { useState } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/layout/Navbar";
import Login from "./components/Login";
import Cuidadores from "./components/Cuidadores";
import MostrarCuidador from "./components/cuidadores/MostrarCuidador";
import Footer from "./components/layout/Footer";

const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/";

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
                    <Route path="/inicio" element={<HomePage url={url} />} />
                    <Route path="/login" element={<Login url={url} />} />
                    <Route
                        path="/cuidadores"
                        element={<Cuidadores url={url} />}
                    />
                    <Route
                        path="/cuidadores/mostrar/:id"
                        element={<MostrarCuidador />}
                    />
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    );
}

export default App;
