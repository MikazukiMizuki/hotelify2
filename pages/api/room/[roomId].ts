import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const uniqueId = +req.query.roomId;
    const result = await prisma.room.findMany({
        select: {
            id: true,
            name: true,
            desc: true,
            status: true,
            price: true,
        },
        where: {
            id: uniqueId,
        }
    })
    res.status(200).json(result)
}