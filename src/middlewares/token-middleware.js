function hasToken (req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).send('error');
    }

    res.locals.token = token;

    next();
}

export {hasToken};