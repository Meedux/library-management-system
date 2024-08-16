import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();


export const getAuthors = async () => {
    return await prisma.author.findMany();
};

export const getAuthorBooks = async (id: number) => {
    return await prisma.author.findUnique({
        where: {
            id: id,
        },
        include: {
            Books: true,
        },
    });
};

export const getCategories = async () => {
    return await prisma.category.findMany();
}

export const getCategoryBooks = async (id: number) => {
    return await prisma.category.findUnique({
        where: {
            id: id,
        },
        include: {
            Books: true,
        },
    });
};

export const getBooks = async () => {
    return await prisma.book.findMany();
};

export const getBook = async (id: number) => {
    return await prisma.book.findUnique({
        where: {
            id: id,
        },
    });
};
