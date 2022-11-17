export interface Auth {
  token: string | null;
  user: AuthUser | null;
}

export interface AuthUser {
  email: string;
}