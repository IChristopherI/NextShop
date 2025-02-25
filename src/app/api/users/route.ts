import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const allUsers = await prisma.user.findMany();

    return NextResponse.json({ allUsers });
}

export async function POST(req:NextRequest) {
    const data =  await req.json();

    const user = await prisma.user.create({
        data
    });

    return NextResponse.json(user);
}