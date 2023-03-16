export type UserType = 'driver' | 'passenger';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  userType: UserType | null;
};
