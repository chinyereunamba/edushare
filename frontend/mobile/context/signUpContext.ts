import { create } from "zustand";

type Profile = {
  firstName: string;
  lastName: string;
  school: string;
  dob: string;
  department: string;
  faculty: string;
};

type StudentProfile = Profile & {
  level: string;
};

type LecturerProfile = Profile & {
  areaSpecialized: string;
};

type Guest = {
  firstName: string;
  lastName: string;
};

type State = {
  userType: "Student" | "Lecturer" | "Guest" | null;
  email: string;
  password: string;
  profile: Partial<StudentProfile | LecturerProfile | Guest >;
};

type Actions = {
  createUser: (email: State["email"], password: State["password"]) => void;
  updateProfile: (
    profile: Partial<StudentProfile | LecturerProfile | Guest>
  ) => void;
  setUserType: (userType: State["userType"]) => void;
};

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
