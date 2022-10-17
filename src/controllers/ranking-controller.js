import connection from "../db/connection.js";
import dotenv from 'dotenv';

dotenv.config();

async function getRanking (req, res) {

    try {
       let ranking =  (await connection.query(`
        SELECT 
            links.userid AS id, 
            users.name, 
            COUNT(links.*) AS "linksCount", 
            SUM(links.visitcount) AS "visitCount" 
            FROM users 
        JOIN links ON users.id = links.userid 
        GROUP BY users.name, links.userid 
        ORDER BY "visitCount"
        LIMIT 10;
`)).rows;

    res.status(200).send(ranking)
    } catch (error) {
        res.send(error)
    }
}

export default getRanking