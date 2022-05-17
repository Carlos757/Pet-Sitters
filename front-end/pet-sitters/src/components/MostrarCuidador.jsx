import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    ListItem,
    ListItemAvatar,
    Typography,
    Avatar,
    ListItemText,
    Divider,
    Rating,
    Card,
    Box,
    Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AgendarDias from "./AgendarDias.jsx";

const MostrarCuidador = () => {
    const [cuidador, setCuidador] = useState({ rating: 5 });
    const [modal, setModal] = useState(false);
    const location = useLocation();

    const handleOpenModalAgendar = () => {
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    useEffect(() => {
        const propCuidador = location.state.cuidador;
        const newCuidador = {
            ...propCuidador,
            reviews: [
                {
                    id: 1,
                    reviewerName: "Juan",
                    rating: 3,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum voluptatum eum voluptatibus corporis ipsum magnam vitae illo ut eius, commodi beatae. Dolore voluptates sint repellendus eveniet asperiores unde. Fugiat!",
                },
                {
                    id: 2,
                    reviewerName: "Pedro",
                    rating: 3,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum voluptatum eum voluptatibus corporis ipsum magnam vitae illo ut eius, commodi beatae. Dolore voluptates sint repellendus eveniet asperiores unde. Fugiat!",
                },
                {
                    id: 3,
                    reviewerName: "Alejandra",
                    rating: 3,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum voluptatum eum voluptatibus corporis ipsum magnam vitae illo ut eius, commodi beatae. Dolore voluptates sint repellendus eveniet asperiores unde. Fugiat!",
                },
            ],
            petTypes: [
                {
                    id: 1,
                    name: "Perros",
                    image: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                    id: 2,
                    name: "Gatos",
                    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                },
                {
                    id: 3,
                    name: "Serpientes",
                    image: "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                },
                {
                    id: 4,
                    name: "Hamsters",
                    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
                },
                {
                    id: 5,
                    name: "Loros",
                    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
            ],
        };
        setCuidador(newCuidador);
    }, []);

    return (
        <div>
            <Card sx={{ p: 3 }}>
                <ListItem className="cuidador-detalle-item" alignItems="center">
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
                                <Typography variant="overline">Edad</Typography>
                                {cuidador.age} años
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

                <Typography
                    className="review-title"
                    variant="h6"
                    alignSelf={"flex-start"}
                    m={2}
                >
                    Cuida de estos animales:
                </Typography>

                {cuidador.petTypes &&
                    cuidador.petTypes.map((petType) => (
                        <ListItem
                            key={petType.id}
                            className="animales-detalle-item"
                            alignItems="center"
                            sx={{
                                display: "inline-flex",
                                width: "auto",
                            }}
                        >
                            <Box p={1}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="avatar-pet-type"
                                        src={petType.image}
                                        sx={{ width: 100, height: 100 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography
                                            className="review-title"
                                            variant="subtitle1"
                                            align="center"
                                        >
                                            {petType.name}
                                        </Typography>
                                    }
                                />
                            </Box>
                        </ListItem>
                    ))}
                <Divider />
                {cuidador.reviews &&
                    cuidador.reviews.map((review) => (
                        <ListItem
                            key={review.id}
                            className="cuidador-detalle-item"
                            alignItems="center"
                        >
                            <ListItemText
                                primary={
                                    <div className="cuidador-item-text">
                                        <Typography
                                            className="review-title"
                                            variant="h6"
                                            alignSelf={"flex-start"}
                                            mb={1}
                                        >
                                            Reseña de {review.reviewerName}
                                            <Rating
                                                name="review"
                                                sx={{ ml: 2 }}
                                                size="small"
                                                value={review.rating}
                                                readOnly
                                            />
                                        </Typography>

                                        <Typography variant="subtitle1">
                                            {review.text}
                                        </Typography>
                                    </div>
                                }
                            />
                        </ListItem>
                    ))}

                {/* Modal */}
                <Fab
                    variant="extended"
                    color="primary"
                    sx={{ position: "fixed", bottom: 32, right: 32 }}
                    onClick={handleOpenModalAgendar}
                >
                    <AddIcon />
                    Agendar Días
                </Fab>
                <AgendarDias
                    modal={modal}
                    setModal={setModal}
                    handleCloseModal={handleCloseModal}
                    cuidador={cuidador}
                />
            </Card>
        </div>
    );
};

export default MostrarCuidador;
