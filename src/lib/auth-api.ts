const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  token?: string;
  user?: AuthUser;
  resetToken?: string;
  resetPath?: string;
};

async function postAuth(path: string, body: Record<string, string>) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json()) as AuthResponse;
  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }
  return data;
}

export async function loginUser(email: string, password: string) {
  return postAuth("/api/auth/login", { email, password });
}

export async function signupUser(name: string, email: string, password: string) {
  return postAuth("/api/auth/signup", { name, email, password });
}

export async function forgotPassword(email: string) {
  return postAuth("/api/auth/forgot-password", { email });
}

export async function resetPassword(token: string, password: string) {
  return postAuth("/api/auth/reset-password", { token, password });
}
