// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {query: {a,b}} = req
  res.status(200).json({ hasil: (a as unknown as number) + (b as unknown as number) })
}