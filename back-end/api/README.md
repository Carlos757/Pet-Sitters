# Configuración

Para poder correr la api es necesario primero haber creado la base de datos con el script que se encuentra en este mismo repo, luego crear un archivo .env en la raíz de la carpeta "api" con algo similar a la siguiente configuración:

```
HOST = localhost
DATABASE = PetSitter
USER = root
PASSWORD = ''
```

Una vez realizado lo anterior, se puede correr la api con los siguientes comandos:

```
npm install
npm run dev
```

# End-points

### `/api/pet-sitters`

Estructura del body utilizado en metodos POST, PUT:

```json
{
    "name": "[nombre en texto plano]",
    "lastName": "[apellido en texto plano]",
    "email": "[correo en texto plano]",
    "cellphone": "[celular en texto plano]",
    "cityId": "[cityId en numero]",
    "photoURL": "[photoURL en texto plano]"
}
```

-   Obtiene todos Pet Sitters : `GET /api/pet-sitters/`
-   Crea un nuevo Pet Sitter : `POST /api/pet-sitters/`

-   Obtiene un Pet Sitter por ID: `GET /api/pet-sitters/:id/`
-   Actualiza un Pet Sitter: `PUT /api/pet-sitters/:id/`

-   Elimina un Pet Sitter : `DELETE /api/pet-sitters/:id/`
-   Obtiene todos Pet Sitters filtrados por State : `GET /api/pet-sitters/state/:id/`

### `/api/pet-sitters/pets-type`

Estructura del body utilizado en el metodo POST:

```json
{
    "id": "[id de PetsType]"
}
```

-   Obtiene todos “PetsTypes” que tiene asignado un “PetSitter” : `GET /api/pet-sitters/:idPetSitter/pets-type/`
-   Permite agregar “PetsType” a un “PetSitter” : `POST /api/pet-sitters/:idPetSitter/pets-type/`
-   Permite quitar un “PetsType” a un “PetSitter” : `DELETE /api/pet-sitters/:idPetSitter/pets-type/:idPetsType/`
