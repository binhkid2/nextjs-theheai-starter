export interface UserType {
    id: string;
    avatar: string;
    currentCredit: number;
    name: string;
    proDayLeft: number;
    prompt: null; // Assuming 'prompt' can be null based on your example
    zaloId: string;
  }
  
  export const initUser: UserType = {
    id: "",
    avatar: "",
    currentCredit: 0,
    name: "",
    proDayLeft: 0,
    prompt: null,
    zaloId: "",
  };
  