import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

async function getCheckyResponse({ url, type }: { url: string; type: number }) {
  try {
    const endpoint = new URL("http://13.124.34.149:8080");

    endpoint.pathname = "/crawling/result";

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

export type CheckyResponseType = {
  code: number;
  message: string;
  data: {
    summaryContent: string;
    tags: string[];
    words: string[];
    ads: string[];
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const type = searchParams.get("type");

  const res: CheckyResponseType = await getCheckyResponse({
    url: url as string,
    type: Number(type),
  }).then((response) => response?.json());

  console.log(res);

  if (!res || res.code !== 0) {
    return new Response("요청에 실패했습니다.", {
      status: 404,
    });
  }

  if (!res.data.summaryContent) {
    return new Response("요약된 내용이 없습니다.", {
      //  서버 내부 오류
      status: 500,
    });
  }

  return new Response(JSON.stringify(res.data), {
    status: 200,
  });
}
