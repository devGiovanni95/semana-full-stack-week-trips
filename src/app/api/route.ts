import { prisma } from "@/lib/prisma";
import { set } from "date-fns";
import { NextResponse } from "next/server";
import { resolve } from "path";

export async function GET() {
    const trips = await prisma.trip.findMany();

    await new Promise((resolve) => setTimeout(resolve,0));

    return new NextResponse(JSON.stringify(trips), {status:200})
}