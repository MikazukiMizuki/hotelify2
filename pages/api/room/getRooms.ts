import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const uniqueId = req.body.hotelId;
    const result = await prisma.room.findMany({
        select: {
            id: true,
            name: true,
            desc: true,
            status: true,
            price: true,
            hotelId: true,
        },
        where: {
            hotelId: +uniqueId,
        }
    })
    res.status(200).json(result)
}