import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const uniqueId = req.body.userId;
    const result = await prisma.transaction.findMany({
        select: {
            transactionId: true,
            roomId: true,
            createdAt: true,
            status: true,
        },
        where: {
            userId: uniqueId,
        },
        orderBy: {
            createdAt: "asc",
        }
    })
    res.status(200).json(result)
}