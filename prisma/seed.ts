import { PrismaClient, User } from "@prisma/client";
import Chance from 'chance'

const client = new PrismaClient()
var chance = new Chance();

async function seed() {
    const user: any = {
        id: "xxxxxxxxx",
        email: "foobar@gmail.com"
    }

    await client.user.create({ data: user })

    for (let i = 0; i < 10; i++) {
        await client.user.create({
            data: {
                name: chance.word({ length: 10 }),
                email: chance.sentence(),
            }
        })
    }
}

seed()