 
  'use client'
import { createStore, useAtom } from 'jotai';
import './AuthCheck.scss'
import ButtonLogin from "./ButtonLogin";
import { isAuthenticatedStore } from './store';
import { useEffect } from 'react';
//@ts-ignore
  
export default  function AuthCheck({children}) { 
  const [isAuthenticated,setIsAuthenticated ] = useAtom(isAuthenticatedStore);
  const myStore = createStore();
  useEffect(() => {
 

    // Subscribe to changes in isAuthenticatedStore
    const unsubIsAuthenticated = myStore.sub(isAuthenticatedStore, () => {
      const newIsAuthenticated = myStore.get(isAuthenticatedStore);
      console.log('isAuthenticatedStore value is changed to', newIsAuthenticated);
      setIsAuthenticated(newIsAuthenticated);
    });

    // Clean up subscriptions on unmount
    return () => { 
      unsubIsAuthenticated();
    };
  }, [myStore, setIsAuthenticated]);
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

