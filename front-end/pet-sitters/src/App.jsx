import { useState } from "react";
import HomePage from "./components/HomePage";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Navbar />
            <HomePage />
        </Container>
    );
}

export default App;
