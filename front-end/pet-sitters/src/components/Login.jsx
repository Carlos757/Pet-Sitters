import { useEffect, useState } from "react";
import { Card, CardContent, Box, Tabs, Tab } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";

import {
    passwordRegExp,
    phoneRegExp,
    emailRegExp,
    namesRegExp,
    addressRegExp,
} from "./utilities/regularExp.js";

import LoginForm from "./sesion/LoginForm.jsx";
import RegisterForm from "./sesion/RegisterForm.jsx";

const Login = ({ url }) => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function validaCampo(campoPorValidar, regExp) {
        if (regExp.test(campoPorValidar)) {
            return true;
        }
        return false;
    }

    return (
        <>
            <Card sx={{ maxWidth: 600, mx: "auto" }}>
                <CardContent>
                    <Box sx={{ width: "100%" }}>
                        <TabContext value={value}>
                            <Box
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                            >
                                <TabList
                                    variant="fullWidth"
                                    onChange={handleChange}
                                >
                                    <Tab label="Login" value="1" />
                                    <Tab label="Registro" value="2" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                <LoginForm
                                    url={url}
                                    emailRegExp={emailRegExp}
                                    passwordRegExp={passwordRegExp}
                                    validaCampo={validaCampo}
                                />
                            </TabPanel>
                            <TabPanel value="2">
                                <RegisterForm
                                    url={url}
                                    passwordRegExp={passwordRegExp}
                                    phoneRegExp={phoneRegExp}
                                    emailRegExp={emailRegExp}
                                    validaCampo={validaCampo}
                                    namesRegExp={namesRegExp}
                                    addressRegExp={addressRegExp}
                                />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default Login;
