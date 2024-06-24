// src/lib/encryptStorage.js
import { EncryptStorage } from 'encrypt-storage';
import { initUser } from './store';

// Import the environment variable
 const secretKey="binh_dep_trai"  //FOR DEMO ONLY

export const encryptStorage = new EncryptStorage(secretKey);
// Example usage:
// encryptStorage.setItem('theheai-userInfo', userInfo);
//export const userInStorage =  encryptStorage.getItem('theheai-userInfo')  || initUser;//use this in saas
/*
 // For getting an item
  function getUserInfo() {
    const userInfo = encryptStorage.getItem('theheai-userInfo');
    console.log(userInfo);
  }
*/