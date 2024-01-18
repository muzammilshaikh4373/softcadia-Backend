import jwt from 'jsonwebtoken'

export const jwtsign = (email) => {
    try {
        let token = jwt.sign({ email }, "secretkey");
        return token
    } catch (error) {
        console.log(error)
    }
};


export const jwtverify = (token) => {
    try {
        let verifytoken = jwt.verify(token, "secretkey");
        return verifytoken
    } catch (error) {
        console.log(error)
    }
};

