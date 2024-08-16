import { getCategories } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export const dynamic = 'force-static'

export async function GET(req: NextRequest){
    const category = await getCategories();
    return Response.json({ category });
}