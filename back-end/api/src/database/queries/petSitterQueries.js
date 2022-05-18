/* Queries para PetSitter unicamente */
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

/* Queries para PetSitter - PetsTypes */
const agregarPetsTypeAPetSitter = `insert into PetSitter_PetsType set ?`;
const eliminarPetsTypeDePetSitter = `delete from PetSitter_PetsType where petSitterId = ? and petsTypeId = ?`;
const consultaPetsTypeDePetSitter =
    `select pt.*, pp.id as petSitter_petsType_id
    from PetsType pt
    inner join PetSitter_PetsType pp on pt.id = pp.petsTypeId
    inner join PetSitter ps on pp.petSitterId = ps.id
    where ps.id = ?`;


module.exports = {
    consultaPetSitter,
    consultaPetSitters,
    crearPetSitter,
    actualizarPetSitter,
    eliminarPetSitter,
    consultaPetSittersPorState,
    agregarPetsTypeAPetSitter,
    consultaPetsTypeDePetSitter,
    eliminarPetsTypeDePetSitter,
};