const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let users = [];
let currentSession = null;
let nextId = 1;

app.get("/", (req, res) => {
  res.json({
    message: "API Gestor de Infraestructura Web - Actividad 2.1",
    endpoints: [
      "GET /api/users",
      "POST /api/users",
      "PUT /api/users/:id",
      "DELETE /api/users/:id",
      "POST /api/login",
      "POST /api/logout"
    ]
  });
});

app.post("/api/users", (req, res) => {
  const { nombre, correo, password } = req.body;

  if (!nombre || !correo || !password) {
    return res.status(400).json({
      error: "Nombre, correo y contraseña son obligatorios"
    });
  }

  const userExists = users.some(user => user.correo === correo);

  if (userExists) {
    return res.status(409).json({
      error: "El correo ya está registrado"
    });
  }

  const newUser = {
    id: nextId++,
    nombre,
    correo,
    password,
    activo: true
  };

  users.push(newUser);

  res.status(201).json({
    message: "Usuario creado correctamente",
    user: {
      id: newUser.id,
      nombre: newUser.nombre,
      correo: newUser.correo,
      activo: newUser.activo
    }
  });
});

app.get("/api/users", (req, res) => {
  const userList = users.map(user => ({
    id: user.id,
    nombre: user.nombre,
    correo: user.correo,
    activo: user.activo
  }));

  res.json({
    total: userList.length,
    users: userList
  });
});

app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nombre, correo } = req.body;

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

  if (!nombre || !correo) {
    return res.status(400).json({
      error: "Nombre y correo son obligatorios"
    });
  }

  user.nombre = nombre;
  user.correo = correo;

  res.json({
    message: "Usuario actualizado correctamente",
    user: {
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
      activo: user.activo
    }
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

  user.activo = false;

  res.json({
    message: "Usuario eliminado lógicamente",
    user: {
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
      activo: user.activo
    }
  });
});

app.post("/api/login", (req, res) => {
  const { correo, password } = req.body;

  const user = users.find(
    user => user.correo === correo && user.password === password && user.activo
  );

  if (!user) {
    return res.status(401).json({
      error: "Credenciales incorrectas o usuario inactivo"
    });
  }

  currentSession = {
    userId: user.id,
    correo: user.correo,
    loginAt: new Date().toISOString()
  };

  res.json({
    message: "Login correcto",
    session: currentSession
  });
});

app.post("/api/logout", (req, res) => {
  currentSession = null;

  res.json({
    message: "Logout correcto"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});