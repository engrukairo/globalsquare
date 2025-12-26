import { BASE_URL } from "@/constants/baseurl";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { endpoint, payload, token, method = "POST" } = await req.json();

    if (!endpoint) {
      return NextResponse.json(
        { message: "An Error Occured: Missing endpoint" },
        { status: 400 }
      );
    }

    const url = `${BASE_URL}/${endpoint}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      // alert(token)
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios({
      url,
      method: method,
      data: payload ?? null,
      headers,
      validateStatus: () => true,
    });
    console.log(response.status);

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    console.log("jhggghgh", error)
    return NextResponse.json(
      { message: "Server error", error: error },
      { status: 500 }
    );
  }
}
