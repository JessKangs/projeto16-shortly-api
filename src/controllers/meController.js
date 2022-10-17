import connection from "../db/connection.js";
import dotenv from 'dotenv';

dotenv.config();

async function userPage (req, res) {
    const { token } = res.locals;

    let findUser = (await connection.query(`SELECT * FROM logintoken WHERE token = '${token}';`)).rows[0];

    try {
        let user = (await connection.query(`
        SELECT users.id, users.name, SUM(links.visitcount) AS visitCount FROM users JOIN links ON users.id = links.userid WHERE users.id = ${findUser.userid} GROUP BY users.name, users.id;`)).rows[0];

        let shortenedUrls = (await connection.query(` 
        SELECT id, shorturl, url, SUM("visitcount") AS "visitCount" FROM links WHERE userid = ${findUser.userid} GROUP BY id;
        `)).rows;

        res.status(200).send({
            id: user.id, name: user.name, visitCount: user.visitcount, shortenedUrls: shortenedUrls
        })

    }catch (error) {
        res.send(404).send(error)
    }
}

export { userPage }