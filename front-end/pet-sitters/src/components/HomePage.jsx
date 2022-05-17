import { Container, Typography, Paper } from "@mui/material";

const HomePage = () => {
    return (
        <div>
            <a className="banner" href="./cuidadores">
                <img
                    className="banner-img"
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                    alt="banner"
                />
                <div className="banner-box" variant="h3">
                    <span className="banner-text">
                        Encuentra un Cuidador para tu Mascota hoy mismo!
                    </span>
                </div>
            </a>
            <div>
                <Paper sx={{ mt: 2, p: 4 }} elevation={3}>
                    <Container align="center">
                        <Typography sx={{ m: 2 }} variant="h4">
                            ¿Qué es Pet Sitters?
                        </Typography>
                        <Typography variant="body1">
                            Pet Sitters es una plataforma que te permite
                            encontrar un cuidador de mascotas para tu mascota en
                            la ciudad de tu preferencia.
                        </Typography>
                    </Container>
                </Paper>
                <Paper sx={{ mt: 2, p: 4 }} elevation={3}>
                    <Container align="center">
                        <Typography sx={{ m: 2 }} variant="h4">
                            ¿Cómo funciona?
                        </Typography>
                        <Typography variant="body1">
                            En Pet Sitters, encontrarás una lista de cuidadores
                            que están disponibles para tu mascota.
                        </Typography>
                        <Typography variant="body1">
                            Una vez que hayas seleccionado un cuidador, podrás
                            ver su perfil, ver sus servicios y reservar su
                            servicio.
                        </Typography>
                        <Typography variant="body1">
                            Si no encuentras un cuidador que te guste, puedes
                            crear tu propio perfil de cuidador y publicar
                            servicios para tu mascota.
                        </Typography>
                        <div>
                            <img
                                className="content-img"
                                src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                alt="how-works-img"
                            />
                        </div>
                    </Container>
                </Paper>
                <Paper sx={{ mt: 2, p: 4 }} elevation={3}>
                    <Container align="center">
                        <Typography sx={{ m: 2 }} variant="h4">
                            ¿Qué servicios ofrece Pet Sitters?
                        </Typography>
                        <Typography variant="body1">
                            Pet Sitters ofrece servicios de limpieza,
                            desparasitación, baño y cepillado de mascotas.
                        </Typography>
                        <div>
                            <img
                                className="content-img"
                                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="services-img"
                            />
                        </div>
                    </Container>
                </Paper>
            </div>
        </div>
    );
};

export default HomePage;
