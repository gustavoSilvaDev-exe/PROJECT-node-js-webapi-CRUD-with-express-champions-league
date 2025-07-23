/*CREATING API WITH EXPRESS*/

//importing express framework and some specific "pieces" of it (Request and Response)
import express, {Request, Response, json} from "express";
import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`🔥 Server running at port http://localhost:${port}`);
});