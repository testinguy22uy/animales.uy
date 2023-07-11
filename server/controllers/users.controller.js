import { pool } from "../database.js";


export const ping = async (req, res) => {
    try {
      const [result] = await pool.query(`SELECT NOW() as now`);
      return res.json(result[0]);
    } catch (error) {
      console.log(error);
    }
};

export const test = async (req, res) => {
    try {
        const [result] = await pool.query(`SHOW TABLES`);
        const [tablas] = await pool.query(`SELECT * FROM ${result[0].Tables_in_animales_uy_db}`);
        // console.log(result[0].Tables_in_animales_uy_db);
        console.log(tablas);
        return res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (req, res) => {
    if (!req.body.name)
        res.send("Required name");

    const result = await pool.query(`INSERT INTO users (id, name, edad) VALUES (${req.body.id}, '${req.body.name}', ${req.body.edad})`);
    // await console.log(req.body);
    return res.send("Recivido");
};



