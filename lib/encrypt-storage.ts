// src/lib/encryptStorage.js
let encryptStorage = null;
if (typeof window !== 'undefined') {
  const { EncryptStorage } = require('encrypt-storage');
  const secretKey = "binh_dep_trai"; //FOR DEMO ONLY
  encryptStorage = new EncryptStorage(secretKey);
}

export { encryptStorage };

 

 

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