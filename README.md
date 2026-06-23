# Student Registry System

Studentų ir jų mokomųjų dalykų valdymo sistema, sukurta naudojant React, Node.js, Express ir PostgreSQL.

## Naudotos technologijos

### Frontend

* React
* React Router
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg
* dotenv

### Kiti įrankiai

* Docker
* Docker Compose
* Bruno (REST API testavimui)
* Git / GitHub

---

# Projekto paleidimas

## 1. Klonuoti projektą

```bash
git clone <repository-url>
cd praktikos-egzaminas
```

---

## 2. Paleisti Docker konteinerius

```bash
docker compose up --build
```

Bus paleisti:

* PostgreSQL
* pgAdmin
* Backend API

PostgreSQL inicializavimo metu automatiškai:

* sukuriamos lentelės
* įkeliami pradiniai duomenys (seed)

---

## 3. Paleisti Frontend

Atidaryti naują terminalą:

```bash
cd frontend
npm install
npm run dev
```

Frontend pasiekiamas:

```text
http://localhost:5173
```

---

# PostgreSQL prisijungimas

### pgAdmin

```text
http://localhost:5050
```

Prisijungimo duomenys:

```text
Email: admin@admin.com
Password: admin
```

### PostgreSQL

```text
Host: postgres
Port: 5432
Database: student_registry
User: postgres
Password: postgres
```

Jeigu jungiamasi ne per Docker tinklą:

```text
Host: localhost
Port: 5432
```

---

# REST API Endpointai

## Studentai

### Gauti visus studentus

```http
GET /api/students
```

---

### Gauti studentą pagal ID

```http
GET /api/students/:id
```

Pavyzdys:

```http
GET /api/students/1
```

---

### Filtruoti studentus

```http
GET /api/students?firstName=Jonas
```

```http
GET /api/students?lastName=Jonaitis
```

```http
GET /api/students?course=2
```

Galima kombinuoti:

```http
GET /api/students?firstName=Jonas&course=1
```

---

### Sukurti studentą

```http
POST /api/students
```

Body:

```json
{
  "firstName": "Jonas",
  "lastName": "Jonaitis",
  "course": 1
}
```

---

### Atnaujinti studentą

```http
PATCH /api/students/:id
```

Body:

```json
{
  "firstName": "Jonukas",
  "lastName": "Jonaitis",
  "course": 2
}
```

---

### Ištrinti studentą

```http
DELETE /api/students/:id
```

---

# Dalykai

## Gauti studento dalykus

```http
GET /api/students/:id/subjects
```

Pavyzdys:

```http
GET /api/students/1/subjects
```

---

## Sukurti dalyką

```http
POST /api/students/:id/subjects
```

Body:

```json
{
  "name": "JavaScript",
  "credits": 5
}
```

---

## Atnaujinti dalyką

```http
PATCH /api/subjects/:id
```

Body:

```json
{
  "name": "Advanced JavaScript",
  "credits": 6
}
```

---

## Ištrinti dalyką

```http
DELETE /api/subjects/:id
```

---

# Validacija

## Studentai

* Vardas privalomas
* Pavardė privaloma
* Kursas privalomas
* Kursas gali būti tik nuo 1 iki 4

## Dalykai

* Pavadinimas privalomas
* Kreditai privalomi
* Kreditai gali būti tik nuo 1 iki 10

Validacija vykdoma:

* Frontend pusėje (React)
* Backend pusėje (Express)

---

# Klaidų formatas

Klaidos grąžinamos JSON formatu:

```json
{
  "status": "error",
  "message": "Kreditai turi būti nuo 1 iki 10"
}
```

---

# Vietiniai testai

REST API testavimui naudotas Bruno.

Pavyzdiniai testai:

### Studentų gavimas

```http
GET http://localhost:3003/api/students
```

### Studento sukūrimas

```http
POST http://localhost:3003/api/students
```

Body:

```json
{
  "firstName": "Jonas",
  "lastName": "Jonaitis",
  "course": 1
}
```

### Dalyko sukūrimas

```http
POST http://localhost:3003/api/students/1/subjects
```

Body:

```json
{
  "name": "JavaScript",
  "credits": 5
}
```

---

# Projekto funkcionalumas

Įgyvendintas pilnas CRUD:

## Studentai

* Create
* Read
* Update
* Delete

## Dalykai

* Create
* Read
* Update
* Delete

Papildomai:

* Filtravimas
* Modaliniai langai
* Frontend ir backend validacija
* PostgreSQL duomenų bazė
* Docker Compose infrastruktūra
* Seed duomenys
* React Router navigacija
