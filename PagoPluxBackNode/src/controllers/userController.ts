import { PrismaClient } from "@prisma/client";
import { Response } from "../models/Response";
import { hash, genSalt } from "bcryptjs";
import { User } from "../models/User";


const prisma = new PrismaClient();

export const createUser = async (
    userRequest: User
): Promise<Response<User>> => {
    try {
        const salt = await genSalt(10);
        const pass: any = await hash(userRequest.password, salt);
        userRequest.password = pass;
        const user = await prisma.user.create({ data: userRequest });
        return {
            data: user,
            message: "Se ha creado el usuario exitosamente",
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            message: "Ha ocurrido un error",
        };
    }
};

export const findUser = async (email: string): Promise<Response<User>> => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email:email
            }
        })
        return {
            data: user,
            message: ''
        };
    } catch (error) {
        return {
            data: null,
            message: "Ha ocurrido un error"
        }
    }
};