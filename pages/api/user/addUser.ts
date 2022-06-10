import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import bcrypt from "bcrypt"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, password } = req.body
    const hash = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
        data: {
            name,
            email,
            password: hash,
        },
    })
    res.status(200).json(result)
}