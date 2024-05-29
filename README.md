# APP CON PG

## CRUD

```sh
GET '/estudiantes'
```

```sh
POST '/estudiante/agregar'

body: {
    "nombre" : "carlitos",
    "rut" : "11.111.111-k",
    "curso" : "4TO A",
    "nivel" : 3
}
```

```sh
PUT '/estudiante/modificar/:id'

body: {
    "nombre" : "nombre actualizado",
}
```

```sh
DELETE '/estudiante/eliminar/:id'
```