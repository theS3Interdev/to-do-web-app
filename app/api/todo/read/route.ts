import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/utils/prismadb";

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated.", { status: 401 });
    }

    const todos = await prismadb.todo.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        title: "asc",
      },
    });

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.log("[TODOS_READ]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
