
const consultaPetSitter = `select * from PetSitter where id = ?`;
const consultaPetSitters = `select * from PetSitter`;
const crearPetSitter = `insert into PetSitter set ?`;
const actualizarPetSitter = `update PetSitter set ? where id = ?`;
const eliminarPetSitter = `delete from PetSitter where id = ?`;
const consultaPetSittersPorState =
    `select p.*, c.nombre as cityName, s.id as stateId, s.nombre as stateName
    from petsitter p
    inner  join city c on p.cityId = c.id
    inner  join state s on c.stateId = s.id
    where s.id = ?`;


module.exports = {
    consultaPetSitter,
    consultaPetSitters,
    crearPetSitter,
    actualizarPetSitter,
    eliminarPetSitter,
    consultaPetSittersPorState,
};