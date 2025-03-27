# Service Finder App

A modern web application built with React, TypeScript, and Vite, styled with Tailwind CSS.

## 🚀 Features

- Modern front-end development with React and TypeScript
- Fast build and development environment powered by Vite
- Responsive and customizable UI with Tailwind CSS
- RESTful API backend with Spring Boot

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

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (bundled with Node.js)
- Maven (for Java backend)

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

## 📄 License

This project is licensed under the [MIT License](LICENSE).
