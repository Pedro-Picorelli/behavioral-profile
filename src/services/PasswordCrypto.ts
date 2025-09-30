import { compare, genSalt, hash } from "bcryptjs"
import dotenv from "dotenv";

dotenv.config();

const SALT_RANDOMS = Number(process.env.SALT_RANDOMS) || 8;

const hashPassword = async (password: string) => { 
    const saltGenerated = await genSalt(SALT_RANDOMS);
    return await hash(password, saltGenerated);
};

const verifyPassword = async (password: string, hashPassword: string) => {
    return await compare(password, hashPassword);
};

export const PasswordCrypto = {
    hashPassword,
    verifyPassword
}