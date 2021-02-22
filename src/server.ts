import  express, { response }  from 'express';
import { request } from "http";

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "eae malandragem"});
}
);

app.post("/", (request, response) =>{
  return response.json({message: "Salvou essa tua parada ai"});
});

app.listen(3333, () => console.log("Ta rodando essa merda ♥🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️ finalmente"));