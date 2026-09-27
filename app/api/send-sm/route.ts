import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://app.mobitechtechnologies.com/sms/sendsms",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        h_api_key:
          "8c6b85b4d73a7d6d18230ea3366294b039caf64267524f9376a30f0b7ec8c457",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
