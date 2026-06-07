# Pruebas Manuales y Evidencias Funcionales - Actividad 2.1

## Objetivo

Documentar las pruebas manuales realizadas sobre el backend del CRUD de usuarios y autenticación básica implementado para la Actividad 2.1.

## Entorno de pruebas

| Elemento | Descripción |
|---|---|
| Backend | Node.js + Express |
| Puerto | 3000 |
| URL base | `http://localhost:3000` |
| Herramienta de prueba | PowerShell con `Invoke-RestMethod` |
| Tipo de prueba | Manual |
| Repositorio | `jec69/actividad-2-1-sdlc` |

## Endpoints probados

| Método | Endpoint | Función |
|---|---|---|
| GET | `/` | Verificar API activa |
| POST | `/api/users` | Crear usuario |
| GET | `/api/users` | Consultar usuarios |
| PUT | `/api/users/:id` | Editar usuario |
| DELETE | `/api/users/:id` | Eliminar usuario lógicamente |
| POST | `/api/login` | Iniciar sesión |
| POST | `/api/logout` | Cerrar sesión |

## Tabla de pruebas manuales

| No. | Prueba | Método | Endpoint | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|
| 1 | Verificar API activa | GET | `/` | Mostrar mensaje de API y endpoints disponibles | La API respondió correctamente | Aprobada |
| 2 | Crear usuario | POST | `/api/users` | Crear usuario con nombre, correo y contraseña | Usuario creado correctamente | Aprobada |
| 3 | Consultar usuarios | GET | `/api/users` | Mostrar listado de usuarios registrados | Se mostró el usuario registrado | Aprobada |
| 4 | Editar usuario | PUT | `/api/users/1` | Actualizar nombre y correo del usuario | Usuario actualizado correctamente | Aprobada |
| 5 | Login | POST | `/api/login` | Iniciar sesión con credenciales válidas | Login correcto | Aprobada |
| 6 | Logout | POST | `/api/logout` | Cerrar sesión activa | Logout correcto | Aprobada |
| 7 | Eliminar usuario | DELETE | `/api/users/1` | Marcar usuario como inactivo | Usuario eliminado lógicamente | Aprobada |
| 8 | Validar eliminación | GET | `/api/users` | Mostrar usuario con estado activo en falso | Usuario mostrado como inactivo | Aprobada |

## Comandos utilizados en las pruebas

### Crear usuario

```powershell
Invoke-RestMethod -Method POST -Uri "http://localhost:3000/api/users" -ContentType "application/json" -Body '{"nombre":"Joaquin Enriquez","correo":"joaquin@test.com","password":"123456"}'