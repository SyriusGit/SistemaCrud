import { Request, Response } from "express";
const fs = require('fs');
//Importar banco de dados de extensão .json
const data: string = './database.json'; 

async function listUsers(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data);
    res.send(JSON.parse(jsonData));
};

export default {
    listUsers
}