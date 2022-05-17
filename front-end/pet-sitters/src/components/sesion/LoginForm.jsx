import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Typography,
    Box,
    TextField,
    InputAdornment,
    IconButton,
    CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = ({ url, emailRegExp, passwordRegExp, validaCampo }) => {
    const [usuario, setUsuario] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [validated, setValidated] = useState(null);

    useEffect(() => {
        validaFormulario();
    }, [errorEmail, errorPassword]);
    useEffect(() => {
        validated ? login() : undefined;
    }, [validated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = usuario;
        validaCampo(email, emailRegExp)
            ? setErrorEmail(false)
            : setErrorEmail(true);
        validaCampo(password, passwordRegExp)
            ? setErrorPassword(false)
            : setErrorPassword(true);
    };
    async function login() {
        setLoading(true);
        try {
            const response = await fetch(`${url}/users`, {
                method: "POST",
                body: JSON.stringify(usuario),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            /* console.log(data); */
            if (data.id) {
                navigate("/inicio");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function validaFormulario() {
        if (!errorEmail && !errorPassword && !camposVacios()) {
            setValidated(true);
            return;
        }
        setValidated(false);
    }

    function camposVacios() {
        const { email, password } = usuario;
        if (email === "" || password === "") {
            return true;
        }
        return false;
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Typography align="center" variant="h5" color="initial">
                Bienvenido de Vuelta!
            </Typography>
            <Box
                className="form"
                display="flex"
                flexDirection="column"
                component="form"
                onSubmit={handleSubmit}
                method="POST"
                alignContent="center"
                justifyContent="center"
            >
                <TextField
                    error={errorEmail ? true : false}
                    value={usuario.email}
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            email: e.target.value,
                        })
                    }
                    helperText={errorEmail ? "Ingrese un correo valido" : ""}
                    id="email"
                    label="Email"
                    sx={{ mt: 3, mb: 1, mx: 1 }}
                />
                <TextField
                    error={errorPassword ? true : false}
                    type={showPassword ? "text" : "password"}
                    value={usuario.password}
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            password: e.target.value,
                        })
                    }
                    helperText={
                        errorPassword
                            ? "Debe tener una mayuscula, minuscula, un numero y 8 caracteres"
                            : ""
                    }
                    id="password"
                    label="Contraseña"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{ m: 1 }}
                />
                <Button
                    variant="contained"
                    sx={{ my: 2 }}
                    type="submit"
                    size="large"
                    disabled={loading ? true : false}
                >
                    {loading ? (
                        <CircularProgress size={30} sx={{ color: "white" }} />
                    ) : (
                        "Login"
                    )}
                </Button>
            </Box>
        </>
    );
};

export default LoginForm;
