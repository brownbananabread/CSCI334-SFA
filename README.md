# Service Finder App

A modern web application built with React, TypeScript, and Vite, styled with Tailwind CSS.

## 🚀 Features

- Modern front-end development with React and TypeScript
- Fast build and development environment powered by Vite
- Responsive and customizable UI with Tailwind CSS
- RESTful API backend with Spring Boot
- Database integration with JDBC

## 🛠️ Tech Stack

- **Frontend**
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
- **Backend**
  - Java
  - Spring Boot
  - Maven
  - JDBC Template
- **Database**
  - PostgreSQL

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (bundled with Node.js)
- Maven (for Java backend)
- PostgreSQL

## 🔧 Installation

### Frontend Setup
```bash
# Install Vite
npm install -D vite --legacy-peer-deps

# Install client dependencies
cd client
npm install
```

### Backend Setup
```bash
# Install server dependencies
cd server
mvn install
```

### Database Setup
1. Install PostgreSQL
2. Create a database named `service_finder`
3. Update `application.properties` with your database credentials

## 🚀 Running the Application

### Start Frontend
```bash
cd client
npm run dev
```
Frontend will be available at: `http://localhost:5173`

### Start Backend
```bash
cd server
mvn spring-boot:run
```
Backend will be available at: `http://localhost:5174`

## 📜 Available Scripts

- `npm run dev` - Start the client development server
- `npm run build` - Build the React app for production
- `npm run preview` - Preview the production build

## 📚 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
