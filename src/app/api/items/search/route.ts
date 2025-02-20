import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';
    const items = await prisma.item.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive',
            },

        },
    });
    return NextResponse.json( items );
    
}


