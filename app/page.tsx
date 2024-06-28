"use client"
import toast, { Toaster } from 'react-hot-toast';
import { isAuthenticatedStore, userInfoStore } from "@/lib/store";
import { createStore, useAtom } from "jotai";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import axios from 'axios';
import HomeContent from '@/lib/components/HomeContent';
import LoadingOverlay from '@/lib/components/LoadingOverlay';
import Page404 from '@/lib/components/Page404';
export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedStore);
  const [, setUserInfo] = useAtom(userInfoStore);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  
  const myStore = createStore();
  useEffect(() => {
    // Subscribe to changes in userInfoStore
    const unsubUserInfo = myStore.sub(userInfoStore, () => {
      const newUserInfo = myStore.get(userInfoStore);
      console.log('userInfoStore value is changed to', newUserInfo);
      setUserInfo(newUserInfo);
    });

    // Subscribe to changes in isAuthenticatedStore
    const unsubIsAuthenticated = myStore.sub(isAuthenticatedStore, () => {
      const newIsAuthenticated = myStore.get(isAuthenticatedStore);
      console.log('isAuthenticatedStore value is changed to', newIsAuthenticated);
      setIsAuthenticated(newIsAuthenticated);
    });

    // Clean up subscriptions on unmount
    return () => {
      unsubUserInfo();
      unsubIsAuthenticated();
    };
  }, [myStore, setUserInfo, setIsAuthenticated]);


  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        toast.error('No token provided! ❌❌❌');
        return;
      }
      try {
        setIsLoading(true);
        // Fetch user info using token 
        const getUserInfoResponse = await axios.post("/api/getUserInfo", { token: token });
        const userResponse = getUserInfoResponse.data.userInfo;
        // Update global state
        setUserInfo(userResponse);
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Failed to get user information', error);
        toast.error('Failed to get user information');
      }
    };
    fetchData();
  }, [token, setIsAuthenticated, setUserInfo]); // Include dependencies in the dependency array
  return (
   <>
    <Toaster position="bottom-center" reverseOrder={false} />
    {isAuthenticated && !isLoading && <HomeContent />}
    {isLoading && <LoadingOverlay />}
    {!isAuthenticated && !isLoading && <Page404 />}
   </>
  );
}
