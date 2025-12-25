import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Article from "@/models/articles";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }>
 }
) {
  await connectDB();
  const { id } = await params;
  const article = await Article.findById(id);
  return NextResponse.json(article);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }>
 }
) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();

  const article = await Article.findByIdAndUpdate(id, body, {
    new: true,
  });
  return NextResponse.json(article);
}


export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }>
 }) {
     await connectDB();
     const { id } = await params;
     await Article.findByIdAndDelete(id);
     return NextResponse.json({ message: "Article deleted successfully" });
}