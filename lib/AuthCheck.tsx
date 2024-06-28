 
  'use client'
import { createStore, useAtom } from 'jotai';
import './AuthCheck.scss'
import ButtonLogin from "./ButtonLogin";
import { isAuthenticatedStore } from './store';
import { useEffect } from 'react';
//@ts-ignore
  
export default  function AuthCheck({children}) { 
  const [isAuthenticated,setIsAuthenticated ] = useAtom(isAuthenticatedStore);
  return (
    <>
     {!isAuthenticated ? (
   <div className="container-scss">
   <div className="top-scss"></div>
   <div className="bottom-scss"></div>
   <div className="center-scss">
  <ButtonLogin/>
   </div>
 </div>
  ) : (
    <>{children}</>
  )}
    </>
  );
}

