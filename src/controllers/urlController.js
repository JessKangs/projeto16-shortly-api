import connection from "../db/connection.js";
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';

dotenv.config();

async function urlShortener(req, res) {
    const token = res.locals.token;
    const { url } = req.body;

    let URL = nanoid(5);

    let user = (await connection.query(`SELECT * FROM logintoken WHERE token = '${token}'`)).rows[0]

    console.log(user)

    console.log(URL)

    try {
         await connection.query(`INSERT INTO links (userid, url, shorturl, visitcount) VALUES (${user.userid}, '${url}', '${URL}', 0)`)

        res.status(201).send('ok')
    } catch(error) {
        res.status(422).send('erro')
    }
}

async function getUrlById(req, res) {
    const { id } = req.params;

    try {
        const findUrl = (await connection.query(`SELECT * FROM links WHERE id = '${id}';`)).rows[0];

        if (findUrl.length !== 0) {
            res.status(200).send(findUrl)
        }
    } catch (error) {
        res.status(404).send(error)
    }
}

async function openUrl (req, res) {
    const { shortUrl } = req.params;

    try {
       
        const findUrl = (await connection.query(`SELECT * FROM links WHERE shorturl = '${shortUrl}';`)).rows[0];

        if (findUrl.length !== 0) {

            let update = findUrl.visitcount + 1;

            await connection.query(`UPDATE links SET visitCount = ${update} WHERE shortUrl = '${findUrl.shorturl}';`)
   
            res.redirect(200, `${findUrl.url}`)
           
           
        } else {
            res.status(404).send('erro')
        }

    } catch (error) {
        res.status(404).send(error)
    }    
}

async function deleteUrl(req, res) {
    const token = res.locals.token;
    const { id } = req.params;

    try {
        let user = (await connection.query(`SELECT * FROM links WHERE id = ${id};`)).rows[0];

        if (user.length > 0) {
            let requestIsValid = (await connection.query(`SELECT * FROM logintoken WHERE id = ${user.userid};`)).rows[0];
    
            if (requestIsValid.token === token) {
                await connection.query(`DELETE FROM links WHERE id = ${id};`)
            
                res.status(204).send("URL excluída com sucesso!")
            } else {
                res.status(401).send('erro')
            }
        } else {
            res.status(404).send("URL inexistente!")
        }
    } catch (error) {
        res.status(422).send(error)
    }

    
}

export {urlShortener, getUrlById, openUrl, deleteUrl};