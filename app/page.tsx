"use client"
import toast, { Toaster } from 'react-hot-toast';
import { UserType, isAuthenticatedStore, userInfoStore } from "@/lib/store";
import { atom, createStore, useAtom } from "jotai";
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

  // Example function to update global state
  const updateUserState = (userResponse: UserType | ((prev: UserType) => UserType)) => {
    setUserInfo(userResponse);
    setIsAuthenticated(true);
  };

  // Function to synchronize atoms after update
  const synchronizeAtoms = (userInfo: any) => {
    // No need to create an atom here, just set the values directly
    setUserInfo(userInfo); // Synchronize userInfoStore with current value
    setIsAuthenticated(true); // Synchronize isAuthenticatedStore with current value
  };
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
        updateUserState(userResponse); // Update user info and authentication state 
        synchronizeAtoms(userResponse); // Synchronize atoms after update
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
