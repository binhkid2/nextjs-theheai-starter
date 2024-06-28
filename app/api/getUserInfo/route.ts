// app/api/getUserInfo/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import axios from 'axios';
// Define your handler function
export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json({ error: 'Token not provided' }, { status: 400 });
    }
    // Fetch JWT secret key from an external API or source
    const urlGetJwtKey = "https://sandbox.theheai.xyz/theheai-sandbox/get-jwt-key";
    const getSecretKey = await axios.get(urlGetJwtKey);
    const secretKey = getSecretKey.data.jwtSecretKey;
    // Verify the JWT token using the fetched secret key
    const userIdToken = jwt.verify(token, secretKey) as { userId: string };
    const userId = userIdToken.userId;
    // Fetch user information using the userId from an external API
    const getUserInfoUrl = "https://sandbox.theheai.xyz/theheai-sandbox/check-userinfo";
    const getUserInfoResponse = await axios.post(getUserInfoUrl, { id: userId });
    const userResponse = getUserInfoResponse.data.userInfo;
    // Send user information as response
    return NextResponse.json({ userInfo: userResponse }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user information:');
    return NextResponse.json({ error: 'Failed to fetch user information' }, { status: 500 });
  }
}
