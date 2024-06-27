/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
"use client"
import { useAtom } from "jotai";
import AuthCheck from "@/lib/AuthCheck"
import { userInfoStore } from "@/lib/store";

export default function ProtectedPage() {
  const [userInfo, ] = useAtom(userInfoStore);
  return (
    <>
    <AuthCheck>
   <h1>Protected Router</h1>
Hello {userInfo.name}
<img src={userInfo.avatar} alt="user avatar" className="w-20 h-20 object-cover"/>
   </AuthCheck>
    </>
  );
}