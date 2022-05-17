create database if not exists PetSitter;

use PetSitter;

create table State(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre varchar(100) NOT NULL
);
create table City(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre varchar(100) NOT NULL,
    stateId INT NOT NULL
);
create table PetsType(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`description` varchar(100) NOT NULL
);
create table PetSitter(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
    lastName varchar(100) NOT NULL,
    email varchar(200) NOT NULL,
    cellphone varchar(15) NOT NULL,
    photoURL varchar(100) NOT NULL,
    cityId INT NOT NULL
);

ALTER TABLE City
	ADD foreign key (stateId) REFERENCES State(id);

ALTER TABLE PetSitter
	ADD foreign key (cityId) REFERENCES City(id);
    
    
-- Ingreso de datos 
insert into State (nombre) values 
("Sinaloa"),("Baja California"),("Jalisco"),("Veracruz");

insert into City (nombre, stateId) values 
("Culiacan",1),("Mochis",1),
("Tijuana",2),("Mexicali",2),
("Guadalajara",3),("Zapopan",3),
("Córdoba",4),("Boca del Río",4);

insert into PetsType (description) values 
("Perros"),("Gatos"),("Serpientes");

insert into PetSitter (name, lastName, email, cellphone, cityId, photoURL ) values 
("Carlos","Ríos","carlos123df@gmail.com","6674347527",1,"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg"),
("Pedro","Lopez","pedrof@gmail.com","6674758990",2,"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg"),
("Alejandra","Ordáz","ale@gmail.com","6674342809",3,"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg"),
("Miguel","Santillo","migue@gmail.com","6674354371",7,"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg");

-- Consultas
-- truncate table PetSitter;
-- drop database petsitter;
 
 -- permita agregar información en tabla “PetSitter
 insert into PetSitter (name, lastName, email, cellphone, cityId, photoURL ) values 
 ("Carlos","Ríos","carlos123df@gmail.com","6674347527",1,"url");
 
--  permita editar información de un registro de “PetSitter”
update PetSitter set 
name = "Ignacio", 
lastName = "Madrid",
email = "",
cellPhone = "",
cityId = 2,
photoURL = ""
where id = 1;
 
--  permita eliminar un registro de “PetSitter”
delete from PetSitter where id = 2;
 
--  obtenga listado de todos los registros de “PetSitter”
select * from PetSitter;
 
--  obtenga registros de “PetSitter ” filtrado por “State”
select p.*, c.nombre as cityName, s.id as stateId, s.nombre as stateName
from petsitter p
inner  join city c on p.cityId = c.id
inner  join state s on c.stateId = s.id
where s.id = 1;


-- Resolución de problemas
-- Desarrollar modelo en BD para que un registro de “PetSitter” se le puedan agregar “PetsType”
-- drop table PetSitter_PetsType
create table PetSitter_PetsType(
    id INT PRIMARY KEY AUTO_INCREMENT,
	petSitterId INT NOT NULL,
	petsTypeId INT NOT NULL
);

ALTER TABLE PetSitter_PetsType
	ADD foreign key (petSitterId) REFERENCES PetSitter(id),
    ADD foreign key (petsTypeId) REFERENCES PetsType(id),
	ADD unique index i_petSitterId_petsTypeId (petSitterId, petsTypeId);

-- permita agregar “PetsType” a un “PetSitter”
 insert into PetSitter_PetsType (petSitterId, petsTypeId) values 
 (1,1),(1,2),(4,2),(4,1);
 
-- permita obtener todos los “PetsType” que tiene asignado un “PetSitter”
select pt.*, pp.id as petSitter_petsType_id
from PetsType pt
inner  join PetSitter_PetsType pp on pt.id = pp.petsTypeId
inner  join PetSitter ps on pp.petSitterId = ps.id
where ps.id = 1;

-- permita quitar un “PetsType” a un “PetSitter” (2 posibles opciones)
delete from PetSitter_PetsType where id = 2;
delete from PetSitter_PetsType where petSitterId = 1 and petsTypeId = 1 ;






