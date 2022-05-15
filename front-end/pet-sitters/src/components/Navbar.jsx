import React, { useState } from "react";
import {
    MenuItem,
    Button,
    Menu,
    Typography,
    Toolbar,
    AppBar,
    IconButton,
    Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";

import { Link } from "react-router-dom";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuIsOpen = Boolean(anchorEl);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleEncontrarCuidadorClick = () => {
        setAnchorEl(null);
    };
    const handleLoginClick = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <header>
                <AppBar position="fixed" color="info">
                    <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "90%" }}>
                        <IconButton
                            aria-label="logo"
                            color="inherit"
                            component={Link}
                            to={"/inicio"}
                        >
                            <PetsIcon />
                        </IconButton>

                        <Typography sx={{ flexGrow: 1 }} variant="h6">
                            Peet Sitters
                        </Typography>

                        <Button
                            sx={{ color: "white" }}
                            variant="text"
                            onClick={handleMenuClick}
                            startIcon={<MenuIcon />}
                        >
                            Opciones
                        </Button>

                        <Menu
                            id="menu"
                            anchorEl={anchorEl}
                            open={menuIsOpen}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                component={Link}
                                to={"/login"}
                                onClick={handleLoginClick}
                            >
                                Login
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to={"/cuidadores"}
                                onClick={handleEncontrarCuidadorClick}
                            >
                                Encontrar Cuidador
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </header>
        </>
    );
};

export default Navbar;
