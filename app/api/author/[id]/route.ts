import { getAuthorBooks } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }){
    const { id } = params;
    const books = await getAuthorBooks(Number(id));
    return Response.json({ books }, { status: 200 });
}