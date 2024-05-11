import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/utils/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated.", { status: 401 });
    }

    const body = await req.json();

    const { title } = body;

    const todo = await prismadb.todo.create({
      data: { title: title, done: false, userId: userId },
    });

    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    console.log("[TODO_CREATE]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
