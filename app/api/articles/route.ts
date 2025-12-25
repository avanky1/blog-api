import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Article from "@/models/articles";


export async function GET() {
    await connectDB();
    const articles = await Article.find({});
    return NextResponse.json(articles);
}

export async function POST(req: Request) {
  await connectDB();
  console.log("DB connected");

  const body = await req.json();
  console.log("Request body:", body);

  const article = await Article.create(body);
  console.log("Saved article:", article);

  return NextResponse.json(article);
}


