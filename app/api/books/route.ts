import { getBooks } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export const dynamic = 'force-static'

export async function GET(req: NextRequest){
    const book = await getBooks();
    return Response.json({ book });
}