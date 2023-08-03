import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Posts from "@/models/Posts";
export const GET = async (request) => {
  try {
    await connect();

    const posts = await Posts.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(
      "failed to connect to database",
      { status: 500 }
    );
  }
};
