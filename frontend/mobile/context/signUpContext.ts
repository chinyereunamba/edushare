import {
  Actions,
  Guest,
  LecturerProfile,
  State,
  StudentProfile,
} from "@/types";
import { create } from "zustand";

const initialState: State = {
  email: "",
  userType: null,
  password: "",
  profile: {
    firstName: "",
    lastName: "",
    school: "",
    dob: "",
    department: "",
    faculty: "",
    areaSpecialized: "",
    level: "",
  } as StudentProfile | LecturerProfile | Guest,
};

const useUserData = create<State & Actions>()((set) => ({
  ...initialState,
  setUserType: (userType) => set((state) => ({ ...state, userType })),
  createUser: (email, password) =>
    set((state) => ({ ...state, email, password })),
  updateProfile: (profile) =>
    set((state) => ({ ...state, profile: { ...state.profile, ...profile } })),
}));

export default useUserData;
