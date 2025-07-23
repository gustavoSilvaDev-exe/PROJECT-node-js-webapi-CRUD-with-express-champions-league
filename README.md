# ⚽ Champions League Node.js CRUD API

A fully functional CRUD (Create, Read, Update, Delete) RESTful API built with **Node.js**, **Express**, and **TypeScript**. This project is designed to manage entities (like football champions or teams) through well-structured endpoints, with CORS support and clean architecture separation.

## 🚀 Features

* ✅ Built with **Express.js** and **TypeScript**
* 🧱 Modular architecture using `app.ts`, `server.ts`, and routers
* 🌍 CORS enabled with restricted origins and methods
* 🧪 Endpoints organized under `/api` path
* 📄 JSON-based communication (request/response)

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tsup](https://tsup.egoist.dev/) – for bundling the API
* [TSX](https://github.com/esbuild-kit/tsx) – for running TypeScript with zero-config
* [CORS](https://www.npmjs.com/package/cors) – for cross-origin control

## 📁 Project Structure

```
project-root/
├── src/
│   ├── server.ts         # Starts the HTTP server
│   ├── app.ts            # Creates and configures the Express app
│   └── routes/           # Contains the route handlers/controllers
├── .env                  # Environment variables
├── package.json
└── tsconfig.json         # TypeScript configuration
```

## 📦 Installation

```bash
git clone https://github.com/your-username/champions-crud-api.git
cd champions-crud-api
npm install
```

## ⚙️ Available Scripts

| Command               | Description                                    |
| --------------------- | ---------------------------------------------- |
| `npm run start:dev`   | Run the API in development with `.env` support |
| `npm run start:watch` | Watch mode for development                     |
| `npm run dist`        | Compile the API into JavaScript with `tsup`    |
| `npm run start:dist`  | Build and run the compiled version             |

## 🌐 API Endpoint Prefix

All endpoints are prefixed with:

```
/api
```

Example:

```
GET http://localhost:PORT/api/your-resource
```

## 🔒 CORS Configuration

Only requests from the following origins are allowed:

* `http://gustavo.system.com`
* `http://gov.br`

Only these methods are allowed:

* `GET`
* `PATCH`

## 🧪 Example Routes (to be added inside /routes)

> *Note: Your `routes/` folder should contain all the necessary route files (e.g., `champions.routes.ts`) implementing the CRUD logic.*

```ts
// Example route (GET /api/champions)
router.get("/champions", (req, res) => {
  return res.status(200).json([...]);
});
```

## ✅ Environment Variables

Create a `.env` file in the project root with the following:

```
PORT=3000
```

## 📌 Best Practices Used

* Separation of concerns: `app.ts` handles configuration, `server.ts` handles runtime
* JSON as standard for API payloads
* Type safety with TypeScript interfaces
* Modular, scalable folder structure

## 📝 License

ISC — free to use and modify.

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)

---
