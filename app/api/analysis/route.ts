import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

async function getCheckyResponse({ url, type }: { url: string; type: number }) {
  try {
    const endpoint = new URL("http://13.124.34.149:8080");

    endpoint.searchParams.append("url", url);
    endpoint.searchParams.append("type", type.toString());

    return fetch(endpoint.href, {
      headers: {
        "Content-Type": "application/json",
        withCredentials: "true",
      },
      credentials: "include",
      method: "GET",
    }).then((response) => response);
  } catch (error) {
    console.error(error);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const type = searchParams.get("type");

  const res = await getCheckyResponse({
    url: url as string,
    type: Number(type),
  }).then((response) => response?.json());

  return new Response(res, {
    status: 200,
  });
}
