import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await prisma.hotel.findMany({
        select: {
            id: true,
            name: true,
            desc: true,
            email: true,
            link1: true,
            link2: true,
        },
    })
    res.status(200).json(result)
}