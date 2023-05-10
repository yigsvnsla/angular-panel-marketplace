export interface SingInRequest {
  phone: string;
  password: string;
}

export interface SigInResponse {
  refreshToken: string,
  authToken: string
}

