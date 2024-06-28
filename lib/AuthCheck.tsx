 
  'use client'
import { useAtom } from 'jotai';
import './AuthCheck.scss'
import ButtonLogin from "./ButtonLogin";
import { isAuthenticatedStore } from './store';
//@ts-ignore
  
export default  function AuthCheck({children}) { 
  const [isAuthenticated, ] = useAtom(isAuthenticatedStore);
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

