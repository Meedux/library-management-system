import { getBook } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }){
    const { id } = params;
    const book = await getBook(Number(id));
    return Response.json({ book }, { status: 200 });
}