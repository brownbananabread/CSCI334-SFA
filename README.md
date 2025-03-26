# CSCI334 - Service Finder App

A **Service Finder App** built with **React**, **TypeScript**, and **Vite**, styled using **Tailwind CSS**. The project was initialized with `npm create vite@latest`.

## Features

- Modern front-end development with React and TypeScript.
- Fast build and development environment powered by Vite.
- Responsive and customizable UI with Tailwind CSS.

## Getting Started

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (bundled with Node.js)

### Installation

#### Install Vite
```bash
npm install -D vite --legacy-peer-deps
```

#### Client Setup
```bash
cd client
npm install
```

#### Server Setup
```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install flask flask_restful flask_cors
```

### Usage

1. **Start Frontend Server**
    ```bash
    cd client
    npm run dev
    ```
    Hosted on: `http://localhost:5173`

2. **Start Backend Server**
    ```bash
    cd server
    npm run dev
    ```
    Hosted on: `http://localhost:5000`

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript development.
- **Vite**: For fast builds and hot module replacement.
- **Tailwind CSS**: For styling.
- **Python**: For backend development.
- **Flask**: For RESTful API routes.

## License

Licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
