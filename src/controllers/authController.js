import connection from "../db/connection.js";
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

async function signUp (req, res) {
    const {name, email, password} = req.body;

    const passwordHash = bcrypt.hashSync(password, 10)

    try {
        const isValid = (await connection.query(`SELECT * FROM users WHERE email = '${email}';`)).rows
        
        if ( isValid.length === 0) {
             connection.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${passwordHash}');`)
       
            res.status(201).send("ok")
        } else {
            res.status(409).send("usuário já cadastrado")
        }
    } catch (error) {
        console.log("deu  ruim")
        res.status(422).send(error)
        console.log(error)
    }
}

async function signIn(req, res) {
    const {email, password} = req.body;

    try {

        const isValid = (await connection.query(`SELECT * FROM users WHERE email = '${email}'`)).rows[0]

        const passwordIsValid = bcrypt.compareSync(password, isValid.password)

        if ( isValid && passwordIsValid ) {
            const token = uuid();

            await connection.query(`INSERT INTO logintoken (userId, token) VALUES (${isValid.id}, '${token}');`)

            res.status(200).send(token)
        } else {
            res.stauts(401).send("email ou senha incorretos")
        }
    } catch (error) {
        res.status(422).send(error)
    }
}

export {signUp, signIn};