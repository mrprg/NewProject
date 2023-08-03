import Posts from "@/models/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    const post = await Posts.findById(id);
    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    throw new NextResponse("failed to connect to db", {
      status: 500,
    });
  }
};
