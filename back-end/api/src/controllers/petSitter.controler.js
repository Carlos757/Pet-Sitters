import { getConnection } from "./../database/database";
import {
    consultaPetSitter,
    consultaPetSitters,
    crearPetSitter,
    actualizarPetSitter,
    eliminarPetSitter,
    consultaPetSittersPorState
} from "./../database/queries/petSitterQueries"

const getPetSitters = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(consultaPetSitters);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
};
const getPetSittersFilteredState = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(consultaPetSittersPorState, id);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
};
const getPetSitter = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(consultaPetSitter, id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
};
const addPetSitter = async (req, res) => {
    try {
        const { name, lastName, email, cellphone, cityId, photoURL } = req.body;
        const petSitter = { name, lastName, email, cellphone, cityId, photoURL };

        const connection = await getConnection();
        const result = await connection.query(crearPetSitter, petSitter);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const updatePetSitter = async (req, res) => {
    try {
        const { name, lastName, email, cellphone, cityId, photoURL } = req.body;
        const { id } = req.params;
        const petSitter = { name, lastName, email, cellphone, cityId, photoURL }

        const connection = await getConnection();
        const result = await connection.query(actualizarPetSitter, [petSitter, id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const deletePetSitter = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(eliminarPetSitter, id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

/* function checkUndefined(petSitter) {
    let valores = Object.values(petSitter);
    let hasUndefined = false;
    valores.forEach(atributo => {
        if (atributo === undefined) {
            hasUndefined = true;
        }
    });
    return hasUndefined;
} */

export const methods = {
    getPetSitters,
    getPetSitter,
    addPetSitter,
    updatePetSitter,
    deletePetSitter,
    getPetSittersFilteredState,
};