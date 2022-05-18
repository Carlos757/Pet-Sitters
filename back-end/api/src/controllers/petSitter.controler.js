import { getConnection } from "./../database/database";
import {
    consultaPetSitter,
    consultaPetSitters,
    crearPetSitter,
    actualizarPetSitter,
    eliminarPetSitter,
    consultaPetSittersPorState,
    agregarPetsTypeAPetSitter,
    consultaPetsTypeDePetSitter,
    eliminarPetsTypeDePetSitter,
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

const addPetsTypeToPetSitter = async (req, res) => {
    try {
        const { idPetSitter: petSitterId } = req.params;
        const { id: petsTypeId } = req.body;
        const obj = { petSitterId, petsTypeId };
        const connection = await getConnection();
        const result = await connection.query(agregarPetsTypeAPetSitter, obj);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const getAllPetsTypeFromPetSitter = async (req, res) => {
    try {
        const { idPetSitter } = req.params;
        const connection = await getConnection();
        const result = await connection.query(consultaPetsTypeDePetSitter, idPetSitter);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
};

const deletePetsTypeFromPetSitter = async (req, res) => {
    try {
        const { idPetSitter: petSitterId, idPetsType: petsTypeId } = req.params;
        console.log(petSitterId, petsTypeId);
        const connection = await getConnection();
        const result = await connection.query(eliminarPetsTypeDePetSitter, [petSitterId, petsTypeId]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const methods = {
    getPetSitters,
    getPetSitter,
    addPetSitter,
    updatePetSitter,
    deletePetSitter,
    getPetSittersFilteredState,
    addPetsTypeToPetSitter,
    deletePetsTypeFromPetSitter,
    getAllPetsTypeFromPetSitter,
};