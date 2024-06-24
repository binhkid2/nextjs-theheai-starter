/* eslint-disable @next/next/no-img-element */
"use client"
import AuthCheck from "@/lib/AuthCheck"; 
import { encryptStorage } from "@/lib/encrypt-storage";
import { initUser } from "@/lib/store";

export default function Protected() {
  let user =  encryptStorage.getItem('theheai-userInfo')  || initUser;
  return (
    <>
    <AuthCheck>
    <h1>protected Page</h1>
{user.name}
<img src={user.avatar} alt="user avatar" className="w-20 h-20" />
    </AuthCheck>
     
    </>
  );
}