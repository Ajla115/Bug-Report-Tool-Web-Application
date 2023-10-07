

export const register = (req, res) => {
    console.log("Register route found!");
    res.status(201).send('Register is a success!');
}

export const login = (req, res) => {
    console.log("Login route found!");
    res.status(201).send('Login is a success!')
}