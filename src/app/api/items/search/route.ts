import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";


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


