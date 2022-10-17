import joi from 'joi';

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.required()
})

const signUpSchema = joi.object({
    name: joi.string()
        .min(3)
        .max(30)
        .required(),
    email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: joi.ref('password'),
        
    }).xor('password', 'access_token')
    .with('password', 'repeat_password');

function signUpIsValid(req, res, next) {
    const { name, email, password, repeat_password } = req.body
    
    const validation = signUpSchema.validate({ name, email, password, repeat_password }, { abortEarly: true })

    if (validation.error) {
        console.log(validation.error.details)
        res.status(422).send(validation.error)
    } else {

    next()
    }
  
}

function signInIsValid(req, res, next) {
    const { email, password } = req.body

    const validation = loginSchema.validate({email, password}, {abortEarly: true})

    if (validation.error) {
        console.log(validation.error.details)
        res.status(422).send(validation.error)
    } else {
        next()
    }

}

export {signUpIsValid, signInIsValid}