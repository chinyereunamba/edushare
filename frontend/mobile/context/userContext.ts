import { create } from "zustand";
import { setUserData, getUserData, clearUserData } from "@/services/store";
import { UserProps } from "@/types";

type UserState = {
  user: UserProps | null;
  loadUser: () => Promise<void>;
  saveUser: (data: UserProps) => Promise<void>;
  clearUser: () => Promise<void>;
};

const useUser = create<UserState>((set) => ({
  user: null,
  loadUser: async () => {
    const userData = await getUserData();
    set({ user: userData });
  },
  saveUser: async (data: UserProps) => {
    await setUserData(data);
    set({ user: data });
  },
  clearUser: async () => {
    await clearUserData();
    set({ user: null });
  },
}));

export default useUser;
