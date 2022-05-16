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

const RegisterForm = ({
    url,
    passwordRegExp,
    phoneRegExp,
    emailRegExp,
    namesRegExp,
    addressRegExp,
    validaCampo,
}) => {
    const [usuario, setUsuario] = useState({
        firstName: "",
        lastName: "",
        address: "",
        cellphone: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    /* Manejo de errores por campo (generalmente el domicilio me gusta normalizarlo 
        pero por tiempo lo manejaré como campo unico) */
    const [errorFirstName, setErrorFirstName] = useState(null);
    const [errorLastName, setErrorLastName] = useState(null);
    const [errorAddress, setErrorAddress] = useState(null);
    const [errorCellphone, setErrorCellphone] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [validated, setValidated] = useState(null);

    useEffect(() => {
        validaFormulario();
    }, [
        errorFirstName,
        errorLastName,
        errorAddress,
        errorCellphone,
        errorEmail,
        errorPassword,
        errorAddress,
    ]);
    useEffect(() => {
        validated ? crearUsuario() : undefined;
    }, [validated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, address, cellphone, email, password } =
            usuario;
        validaCampo(email, emailRegExp)
            ? setErrorEmail(false)
            : setErrorEmail(true);
        validaCampo(password, passwordRegExp)
            ? setErrorPassword(false)
            : setErrorPassword(true);
        validaCampo(cellphone, phoneRegExp)
            ? setErrorCellphone(false)
            : setErrorCellphone(true);
        validaCampo(firstName, namesRegExp)
            ? setErrorFirstName(false)
            : setErrorFirstName(true);
        validaCampo(lastName, namesRegExp)
            ? setErrorLastName(false)
            : setErrorLastName(true);
        validaCampo(address, addressRegExp)
            ? setErrorAddress(false)
            : setErrorAddress(true);
    };
    async function crearUsuario() {
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
            console.log(data);
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
        if (
            !errorFirstName &&
            !errorLastName &&
            !errorAddress &&
            !errorCellphone &&
            !errorEmail &&
            !errorPassword &&
            !camposVacios()
        ) {
            setValidated(true);
            return;
        }
        setValidated(false);
    }

    function camposVacios() {
        const { firstName, lastName, address, cellphone, email, password } =
            usuario;
        if (
            firstName === "" ||
            lastName === "" ||
            address === "" ||
            cellphone === "" ||
            email === "" ||
            password === ""
        ) {
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
                Te damos la Bienvenida!
            </Typography>
            <Box
                className="form"
                display="flex"
                flexDirection="column"
                component="form"
                onSubmit={handleSubmit}
                alignContent="center"
                justifyContent="center"
            >
                <TextField
                    error={errorFirstName ? true : false}
                    value={usuario.firstName}
                    helperText={
                        errorFirstName ? "Ingrese un nombre valido" : ""
                    }
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            firstName: e.target.value,
                        })
                    }
                    id="name"
                    label="Nombre"
                    sx={{ mt: 3, mb: 1, mx: 1 }}
                />
                <TextField
                    error={errorLastName ? true : false}
                    value={usuario.lastName}
                    helperText={
                        errorLastName ? "Ingrese un apellido valido" : ""
                    }
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            lastName: e.target.value,
                        })
                    }
                    id="lastname"
                    label="Apellido"
                    sx={{ m: 1 }}
                />
                <TextField
                    error={errorAddress ? true : false}
                    value={usuario.address}
                    helperText={
                        errorAddress ? "Ingrese una dirección valida" : ""
                    }
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            address: e.target.value,
                        })
                    }
                    id="address"
                    label="Domicilio"
                    sx={{ m: 1 }}
                />
                <TextField
                    error={errorCellphone ? true : false}
                    value={usuario.cellphone}
                    helperText={
                        errorCellphone ? "Ingrese un numero valido" : ""
                    }
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            cellphone: e.target.value,
                        })
                    }
                    id="cellphone"
                    label="Celular"
                    sx={{ m: 1 }}
                />
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
                    sx={{ m: 1 }}
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
                        "Crear"
                    )}
                </Button>
            </Box>
        </>
    );
};

export default RegisterForm;
