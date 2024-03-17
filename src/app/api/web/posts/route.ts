import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // this can be replaced with the url of the mocktoon server
  const response = await fetch("http://127.0.0.1:3002/api/web/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts = await response.json();

  return Response.json(posts || {});
}
