import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {name,email} = req.body
    const result = await prisma.hotel.create({
        data: {
            name,
            email,
        },
    })
    res.status(200).json(result)
}