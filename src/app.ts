//importing express framework and some specific "pieces" of it (Request and Response)
import express from "express";
import router from "./routes";
import cors from "cors";

function createApp(){
    const app = express();

    /*defining the type of content of the api as JSON: the body of the requisitions and
    responses are JSON*/
    app.use(express.json());

    //controllers and routes
    app.use("/api", router);

    const corsOptions = {
        origin: ["http://gustavo.system.com", "http://gov.br"],
        methods: ["GET", "PATCH"]
    };

    app.use(cors(corsOptions));

    return app;
}

export default createApp;
