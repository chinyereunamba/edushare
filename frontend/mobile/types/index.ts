type Profile = {
  firstName?: string;
  lastName?: string;
  dob?: string;
  institution: string;
  department: string;
  faculty: string;
};

type StudentProfile = Profile & {
  level: string;
  yearOfEntry?: string;
  YearOfGraduation?: string;
};

type LecturerProfile = Profile & {
  areaSpecialized: string;
  title?: string;
  yearsOfExperience?: number;
  phone?: string;
};

type Guest = {
  firstName: string;
  lastName: string;
};

type State = {
  userType: "Student" | "Lecturer" | "Guest" | null;
  email: string;
  password: string;
  profile: Partial<StudentProfile | LecturerProfile | Guest>;
};

type Actions = {
  createUser: (email: State["email"], password: State["password"]) => void;
  updateProfile: (
    profile: Partial<StudentProfile | LecturerProfile | Guest>
  ) => void;
  setUserType: (userType: State["userType"]) => void;
};

type ProfileData = Profile & {
  user: number;
};

type StudentData = ProfileData & StudentProfile;
type LecturerData = ProfileData & LecturerProfile;
type GuestData = ProfileData & Guest;

export type {
  Guest,
  Profile,
  Actions,
  LecturerProfile,
  State,
  StudentProfile,
  StudentData,
  LecturerData,
  GuestData,
};
