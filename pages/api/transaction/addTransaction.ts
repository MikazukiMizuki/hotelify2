import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { roomId, userId } = req.body
    const result = await prisma.transaction.create({
        data: {
            userId,
            roomId: +roomId,
        },
    })
    res.status(200).json(result)
}