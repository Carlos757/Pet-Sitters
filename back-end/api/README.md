### End-points

Tabla `PetSitter`.

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

-   Obtiene un Pet Sitter por ID: `GET /api/pet-sitters/:id`
-   Actualiza un Pet Sitter: `PUT /api/pet-sitters/:id`

-   Elimina un Pet Sitter : `DELETE /api/accounts/:id/`
-   Obtiene todos Pet Sitters filtrados por State : `GET /api/pet-sitters/state/:id`
