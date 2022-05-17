import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import {
    DialogTitle,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    FormHelperText,
    Alert,
    Snackbar,
} from "@mui/material";
import Toast from "./utilities/Toast";

const AgendarDias = ({ modal, handleCloseModal, cuidador }) => {
    const [cita, setCita] = useState({
        id: "",
        nombreMascota: "",
        fecha: "",
        propietario: "",
        tipoMascota: "",
    });
    const [toast, setToast] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userPetSitter"))) {
            setCita({
                ...cita,
                propietario: JSON.parse(localStorage.getItem("userPetSitter")),
            });
        } else {
            setCita({
                ...cita,
                propietario: {
                    id: 1,
                    nombre: "Default",
                    apellido: "Default",
                    email: "Default@default.com",
                    telefono: "1234567890",
                    direccion: "Default",
                },
            });
        }
    }, []);

    const handleCloseDialog = () => {
        setCita({
            id: "",
            nombreMascota: "",
            fecha: "",
            tipoMascota: "",
        });
        setError(false);
        handleCloseModal();
    };

    const handleCrearCita = (e) => {
        e.preventDefault();

        if (camposVacios()) {
            setError(true);
        } else {
            setError(false);
            setToast(true);
            handleCloseDialog();
        }
    };
    const crearCita = () => {
        /* Aqui se crearía la cita consumiendo una api */
    };

    function camposVacios() {
        const { nombreMascota, fecha, notas, propietario, tipoMascota } = cita;
        if (
            nombreMascota === "" ||
            fecha === "" ||
            propietario === "" ||
            tipoMascota === ""
        ) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <Dialog
                component="form"
                onSubmit={handleCrearCita}
                open={modal}
                onClose={handleCloseDialog}
                fullWidth
            >
                <DialogTitle>Agenda Días Para tu Mascota</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Estas por agendar una cita para tu mascota con{" "}
                        {cuidador.firstName} {cuidador.lastName}
                    </DialogContentText>
                    <TextField
                        required
                        fullWidth
                        value={cita.nombreMascota}
                        onChange={(e) =>
                            setCita({
                                ...cita,
                                nombreMascota: e.target.value,
                            })
                        }
                        helperText={"Ingrese el nombre de su mascota"}
                        id="nombre-mascota"
                        label="Nombre de la Mascota"
                        sx={{ mt: 3, mb: 1 }}
                    />
                    <FormControl sx={{ mt: 2 }} fullWidth>
                        <InputLabel id="pet-type-select-label">
                            Tipo de Mascota
                        </InputLabel>
                        <Select
                            required
                            labelId="pet-type-select-label"
                            id="pet-type-select"
                            value={cita.tipoMascota}
                            label="Tipo de Mascota"
                            onChange={(e) =>
                                setCita({
                                    ...cita,
                                    tipoMascota: e.target.value,
                                })
                            }
                        >
                            {cuidador.petTypes &&
                                cuidador.petTypes.map((tipo) => (
                                    <MenuItem key={tipo.id} value={tipo.id}>
                                        {tipo.name}
                                    </MenuItem>
                                ))}
                        </Select>
                        <FormHelperText>
                            Seleccione el tipo de Mascota
                        </FormHelperText>
                    </FormControl>
                    <TextField
                        type="date"
                        required
                        fullWidth
                        value={cita.fecha}
                        onChange={(e) =>
                            setCita({
                                ...cita,
                                fecha: e.target.value,
                            })
                        }
                        helperText={"Día de la cita"}
                        id="fecha-cita"
                        label="Fecha de la cita"
                        sx={{ mt: 3, mb: 1 }}
                    />
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            Todos los Campos Son Obligatorios
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancelar</Button>
                    <Button type="submit" onClick={handleCrearCita}>
                        Agendar
                    </Button>
                </DialogActions>
            </Dialog>

            <Toast
                toast={toast}
                setToast={setToast}
                type="success"
                text="Se guardó Correctamente!"
            />
        </div>
    );
};

export default AgendarDias;
