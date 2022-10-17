function urlIsValid(req, res, next) {
    const { url } = req.body;

    const expression = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    let validation = expression.test(url);

    if (validation) {
        
      next()
    } else {
        res.status(422).send('url inválida')
    }
    
}

export { urlIsValid }