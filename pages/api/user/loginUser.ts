import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import bcrypt from "bcrypt"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, password } = req.body
    const hash = await bcrypt.hash(password, 10);
    const result = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    if (bcrypt.compareSync(password, hash)) {
        res.status(200).json(result)
    }
    else {
        res.status(405);
        res.end();
    }
}
