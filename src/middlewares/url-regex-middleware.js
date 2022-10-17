function urlIsValid(req, res, next) {
    const { url } = req.body;

    const expression = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    let validation = expression.test(url);

    if (validation) {
        
      console.log('boa')
      next()
    } else {
        res.status(422).send('url inválida')
        console.log('ruim')
    }
    
}

export { urlIsValid }