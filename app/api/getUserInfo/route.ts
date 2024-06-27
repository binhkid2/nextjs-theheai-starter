import jwt from "jsonwebtoken";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json(
      {
        error: "Token not provided",
      },
      {
        status: 400,
      }
    );
  }
  try {
    // Fetch JWT secret key
    const urlGetJwtKey =
      "https://sandbox.theheai.xyz/theheai-sandbox/get-jwt-key";
    const getSecretKey = await axios.get(urlGetJwtKey);
    const secretKey = getSecretKey.data.jwtSecretKey;

    // Verify the JWT token using the fetched secret key
    const userIdToken = jwt.verify(token, secretKey) as { userId: string };
    const userId = userIdToken.userId;

    // Fetch user information using the userId
    const getUserInfoUrl =
      "https://sandbox.theheai.xyz/theheai-sandbox/check-userinfo";
    const getUserInfoResponse = await axios.post(getUserInfoUrl, {
      id: userId,
    });
    const userResponse = getUserInfoResponse.data.userInfo;

    // Send user information as response
    NextResponse.json(
      {
        userInfo: userResponse,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failed to fetch user information", error);
    NextResponse.json(
      {
        error: "Failed to fetch user information",
      },
      {
        status: 400,
      }
    );
  }
}
