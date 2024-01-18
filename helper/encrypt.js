import bcrypt from 'bcrypt';

export const convertpassword = async (plainpass, salt) => {
    try {
        let hashpass = await bcrypt.hash(plainpass, salt)
        return hashpass
    } catch (error) {
        console.log(error, "error occure while converting password");
        return "errror"
    }
};

export const comparepassword = async (hashpass, plainpass) => {
    try {
        let compass = await bcrypt.compare(hashpass, plainpass);
        return compass
    } catch (error) {
        console.log(error, "error while comparing password")
    }
};


