# Taller 2 – Firebase Firestore y Node.js

Este proyecto implementa operaciones CRUD con Firebase Firestore desde un servidor en Node.js.

## Tecnologías utilizadas

Node.js

Express

Firebase Admin SDK

Firestore

## Contenido del proyecto

firebase.js — Inicializa la app de Firebase.

index.js — Servidor Express y rutas.

transactions.js — Consultas y operaciones CRUD.

## Cómo ejecutar el proyecto

Instalar dependencias:

npm install


Agregar el archivo de credenciales serviceAccountKey.json dentro del proyecto.
(⚠️ No subir a GitHub)

Ejecutar:

node index.js

## Firestore

El proyecto usa una colección para registrar datos y permite:

Crear documentos

Listar documentos

Actualizar documentos

Eliminar documentos
