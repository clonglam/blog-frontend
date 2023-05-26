import { Post, PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash("password", salt)

    const alice = await prisma.user.upsert({
        where: { email: "hugolam922@gmail.com" },
        update: {
            password: hashedPassword,
        },
        create: {
            email: "hugolam922@gmail.com",
            name: "Hugo",
            password: hashedPassword,
            posts: {
                create: {
                    title: "Check out Prisma with Next.js",
                    slug: "post1",
                    description: "mock post 01",
                    featured: false,
                    likes: 0,
                    watched: 0,
                    ogImage:
                        "https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80",
                    content: "https://www.prisma.io/nextjs",
                    published: true,
                },
            },
        },
    })
    const bob = await prisma.user.upsert({
        where: { email: "bob@prisma.io" },
        update: { password: hashedPassword },
        create: {
            email: "bob@prisma.io",
            name: "Bob",
            password: hashedPassword,
            posts: {
                create: [
                    {
                        title: "Check out Prisma with Next.js2323",
                        slug: "post2",
                        description: "mock post 02",
                        featured: true,
                        likes: 0,
                        watched: 0,
                        ogImage:
                            "https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80",
                        content: "https://www.prisma.io/nextjs",
                        published: true,
                    },
                    {
                        title: "Check out Prisma with Next.js424242",
                        slug: "post3",
                        description: "mock post 03",
                        featured: false,
                        likes: 0,
                        watched: 0,
                        ogImage:
                            "https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80",
                        content: "https://www.prisma.io/nextjs",
                        published: true,
                    },
                ] as Post[],
            },
        },
    })
    console.log({ alice, bob })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async e => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
function hashPaswword(arg0: string) {
    throw new Error("Function not implemented.")
}
