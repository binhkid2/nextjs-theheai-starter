/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
 "use client"
import { encryptStorage } from "./encrypt-storage";
import { initUser } from "./store";
import './AuthCheck.scss'
import ButtonLogin from "./ButtonLogin";

 
interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function AuthCheckContent({ children }: DashboardLayoutProps) { 
    let user =  encryptStorage.getItem('theheai-userInfo')  || initUser;
   
   
  return (
    <>
     {user.zaloId !== "" ? (
    <>{children}</>
  ) : (
    <div className="container-scss">
      <div className="top-scss"></div>
      <div className="bottom-scss"></div>
      <div className="center-scss">
     <ButtonLogin/>
      </div>
    </div>
  )}
    </>
  );
}

