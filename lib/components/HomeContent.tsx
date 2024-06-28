/* eslint-disable @next/next/no-img-element */
"use client"
import { useAtom } from "jotai";
import { userInfoStore } from "../store";
export default function HomeContent() {
    const [userInfo, ] = useAtom(userInfoStore);
  return (
    <>
    <h1>User Name: {userInfo.name}</h1> 
    <img src={userInfo.avatar} alt="user avatar" className="w-20 h-20 object-cover"/>
    <a href="/protected"> 
<h1>Protected Router</h1>
</a>
<a href="/open"> 
<h1>Open Router</h1>
</a>
    </>
  );
}