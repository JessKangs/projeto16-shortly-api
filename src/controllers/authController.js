import connection from "../db/connection.js";

async function teste (req, res) {
    try {
        //connection.query('SELECT * FROM links')
        console.log("funcionante")
        res.send('ok')
    } catch (error) {
        console.log('deu ruim')
        res.status(422).send("not")
    }
}

export default teste;