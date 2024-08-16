import { getAuthors } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export const dynamic = 'force-static'

export async function GET(req: NextRequest){
    const authors = await getAuthors();
    return Response.json({ authors });
}