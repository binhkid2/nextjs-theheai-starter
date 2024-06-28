export interface UserType {
  id: string;
  avatar: string;
  currentCredit: number;
  name: string;
  proDayLeft: number;
  zaloId: string;
}

export const initUser: UserType = {
  id: "",
  avatar: "",
  currentCredit: 0,
  name: "",
  proDayLeft: 0,
  zaloId: "",
};
import { atom } from 'jotai'
export const userInfoStore  = atom<UserType>(initUser)
export const isAuthenticatedStore  = atom<boolean>(false)
