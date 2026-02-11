import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
    login: async () => ({ success: true }),
    logout: async () => ({ success: true }),
    check: async () => ({ authenticated: true }),
    onError:async()=>({}),
    getIdentity: async () => ({
        id: 1,
        name: "Admin",
    }),
};
