export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface SignUpFormData {
  email: string;
  password: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}