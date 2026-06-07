# Control de Versiones - Actividad 2.1

## Objetivo

Documentar el uso de Git y GitHub para aplicar control de versiones durante el desarrollo de la Actividad 2.1.

## Flujo utilizado

El flujo de trabajo aplicado fue el siguiente:

1. Trabajar desde la rama principal `main`.
2. Actualizar la rama principal con `git pull`.
3. Crear una rama específica para cada actividad.
4. Realizar cambios en los archivos del proyecto.
5. Verificar el estado de los archivos con `git status`.
6. Agregar archivos específicos con `git add`.
7. Crear commits descriptivos.
8. Subir la rama a GitHub.
9. Crear Pull Request para integrar los cambios.
10. Hacer merge hacia la rama principal `main`.

## Comandos utilizados

| Comando | Función |
|---|---|
| `git switch main` | Cambia a la rama principal del proyecto |
| `git pull origin main` | Actualiza la rama local con los cambios de GitHub |
| `git switch -c feature/kanban-proyecto` | Crea una rama para documentar el tablero Kanban |
| `git switch -c feature/interfaz-inicial` | Crea una rama para desarrollar la interfaz inicial |
| `git status` | Muestra archivos modificados, nuevos o pendientes |
| `git add archivo` | Agrega archivos específicos al área de preparación |
| `git commit -m "mensaje"` | Guarda un cambio con un mensaje descriptivo |
| `git push -u origin nombre-rama` | Sube una rama nueva al repositorio remoto |
| `git push origin nombre-rama` | Sube cambios posteriores de una rama existente |
| `git branch` | Muestra las ramas locales |
| `git branch -a` | Muestra ramas locales y remotas |

## Ramas utilizadas

| Rama | Propósito |
|---|---|
| `main` | Rama principal del proyecto |
| `feature/kanban-proyecto` | Documentación del tablero Kanban |
| `feature/interfaz-inicial` | Desarrollo de la interfaz inicial |
| `feature/control-versiones` | Documentación del flujo de control de versiones |

## Commits realizados

| Commit | Propósito |
|---|---|
| `chore: crea estructura inicial del proyecto` | Crear estructura base del repositorio |
| `docs: documenta tablero kanban del proyecto` | Documentar el tablero Kanban |
| `docs: actualiza evidencia del tablero kanban` | Actualizar documentación del tablero |
| `feat: desarrolla interfaz inicial de la aplicacion web` | Crear interfaz inicial de la aplicación |
| `docs: documenta control de versiones del proyecto` | Documentar el flujo de Git y GitHub |

## Buenas prácticas aplicadas

- Se trabajó con ramas separadas para no modificar directamente `main`.
- Se usaron commits descriptivos.
- Se relacionaron Pull Requests con issues.
- Se evitó usar `git add .` cuando existían archivos no deseados.
- Se revisaron los cambios antes de integrarlos.
- Se documentó el flujo utilizado como evidencia de la actividad.

## Conclusión

El control de versiones permitió registrar el avance del proyecto de manera ordenada, mantener trazabilidad de los cambios y aplicar un flujo de trabajo profesional mediante ramas, commits y Pull Requests.