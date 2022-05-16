import {
    List,
    ListItem,
    ListItemAvatar,
    Typography,
    Avatar,
    ListItemText,
    Divider,
    Rating,
    CircularProgress,
    Paper,
} from "@mui/material";
import { useEffect, useState } from "react";

const Cuidadores = ({ url }) => {
    const [cuidadores, setCuidadores] = useState([]);

    useEffect(() => {
        cargaCuidadores();
    }, []);

    async function cargaCuidadores() {
        try {
            const response = await fetch(`${url}/users`, {
                method: "GET",
            });
            const data = await response.json();
            /* console.log(data); */
            if (data.length) {
                setCuidadores(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Paper className="cuidador-list">
            <Typography align="center" variant="h4" sx={{ p: 3 }}>
                Listado de Cuidadores
            </Typography>

            <Divider />

            {cuidadores.length > 0 ? (
                cuidadores.map((cuidador) => (
                    <List key={cuidador.id} sx={{}}>
                        <ListItem className="cuidador-item" alignItems="center">
                            <ListItemAvatar>
                                <Avatar
                                    alt="avatar-cuidador"
                                    src={cuidador.avatar}
                                    sx={{ width: 120, height: "auto", mr: 2 }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <div className="cuidador-item-text">
                                        <Typography variant="overline">
                                            Nombre
                                        </Typography>
                                        {cuidador.firstName} {cuidador.lastName}
                                    </div>
                                }
                            />
                            <ListItemText
                                primary={
                                    <div className="cuidador-item-text">
                                        <Typography variant="overline">
                                            Ubicación
                                        </Typography>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {cuidador.city}, {cuidador.state}
                                        </Typography>
                                    </div>
                                }
                            />
                            <ListItemText
                                primary={
                                    <div className="cuidador-item-text">
                                        <Typography variant="overline">
                                            Rating
                                        </Typography>
                                        <Rating
                                            name="rating"
                                            size="small"
                                            value={cuidador.rating}
                                            readOnly
                                        />
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                    </List>
                ))
            ) : (
                <div className="cuidador-item-text">
                    <div>
                        <CircularProgress size={30} sx={{ m: 3 }} />
                    </div>
                </div>
            )}
        </Paper>
    );
};

export default Cuidadores;
