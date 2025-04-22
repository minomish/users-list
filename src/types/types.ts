export interface UserResponce {
  data: User[];
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SelectedUserStore {
  user: User | null; 
  setUser: (user: User) => void;
  clearUser: () => void;
}

export interface UserStore {
  users: User[];
  setUsers: () => Promise<User[]>
}
