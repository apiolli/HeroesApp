# 🦸 HeroesApp

Aplicación full-stack para explorar, buscar y administrar un catálogo de superhéroes y villanos. El proyecto está dividido en dos partes independientes:

- **`heroes-app/`** — Frontend en React + TypeScript
- **`nest-heroes-backend-main/`** — Backend API en NestJS

## ✨ Características

- Listado paginado de héroes con estadísticas (fuerza, inteligencia, velocidad, durabilidad)
- Búsqueda por nombre, poderes, equipo y filtros avanzados (categoría, universo, estado, fuerza mínima)
- Página de detalle por héroe (mediante slug)
- Panel de administración (`/admin`) para gestionar el catálogo
- Sistema de héroes favoritos mediante Context API
- Dashboard con resumen/estadísticas generales (`/summary`)
- Estado sincronizado con la URL (query params) para búsquedas y filtros compartibles

## 🛠 Tech Stack

**Frontend (`heroes-app`)**
- React 19 + TypeScript
- Vite
- React Router
- TanStack Query (React Query) para el manejo de datos remotos
- Tailwind CSS v4
- shadcn/ui (Radix / Base UI) — Accordion, Select, Slider, Tabs, etc.
- Axios
- Lucide React (iconos)

**Backend (`nest-heroes-backend-main`)**
- NestJS 11
- class-validator / class-transformer para DTOs y validación
- Datos en memoria (sin base de datos externa)
- Servido bajo el prefijo global `/api`

## 📂 Estructura del proyecto

```
HeroesApp/
├── heroes-app/                 # Frontend (React + Vite)
│   └── src/
│       ├── admin/              # Panel de administración
│       ├── components/         # Componentes UI (shadcn) y custom
│       ├── herores/            # Módulo principal de héroes
│       │   ├── actions/        # Funciones de fetch (React Query actions)
│       │   ├── api/            # Configuración de Axios
│       │   ├── components/     # Grid, cards, stats
│       │   ├── context/        # Contexto de favoritos
│       │   ├── hooks/          # Custom hooks (paginación, summary)
│       │   ├── layout/         # Layout general
│       │   ├── pages/          # Home, Hero detail, Search
│       │   └── types/          # Interfaces y tipos
│       └── router/             # Definición de rutas
│
└── nest-heroes-backend-main/    # Backend (NestJS)
    └── src/
        ├── common/dto/          # DTOs compartidos (paginación)
        ├── data/                # Dataset de héroes
        └── heroes/              # Módulo de héroes (controller, service, DTOs, entity)
```

## 🚀 Puesta en marcha

### Requisitos previos
- Node.js 18+
- npm

### 1. Clonar el repositorio

```bash
git clone https://github.com/apiolli/HeroesApp.git
cd HeroesApp
```

### 2. Levantar el backend

```bash
cd nest-heroes-backend-main
npm install
npm run start:dev
```

El backend queda disponible en `http://localhost:3000/api` (puerto configurable con la variable de entorno `PORT`).

### 3. Levantar el frontend

En otra terminal:

```bash
cd heroes-app
npm install
```

Crear el archivo `.env` a partir de `.env.template` con la URL del backend:

```
VITE_API_URL=http://localhost:3000
```

Luego iniciar el servidor de desarrollo:

```bash
npm run dev
```

La app quedará disponible en `http://localhost:5173` (puerto por defecto de Vite).

## 📡 Endpoints principales de la API

| Método | Endpoint              | Descripción                                  |
|--------|------------------------|-----------------------------------------------|
| GET    | `/api/heroes`          | Lista paginada de héroes                      |
| GET    | `/api/heroes/summary`  | Estadísticas generales (dashboard)            |
| GET    | `/api/heroes/search`   | Búsqueda avanzada (nombre, poderes, filtros)  |
| GET    | `/api/heroes/:id`      | Detalle de un héroe                           |
| POST   | `/api/heroes`          | Crear un héroe                                |
| PATCH  | `/api/heroes/:id`      | Actualizar un héroe                           |
| DELETE | `/api/heroes/:id`      | Eliminar un héroe                             |

## 📜 Scripts disponibles

**Frontend**
- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run lint` — linting
- `npm run preview` — previsualizar el build

**Backend**
- `npm run start:dev` — servidor en modo watch
- `npm run build` — compilar el proyecto
- `npm run start:prod` — ejecutar el build de producción
- `npm run test` — tests unitarios
- `npm run test:e2e` — tests end-to-end

## 📄 Licencia

Este proyecto no especifica una licencia pública. Contacta al autor para más información sobre su uso.
