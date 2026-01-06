// src/authProvider.ts
import type { AuthProvider } from 'react-admin';

// Usa sessionStorage para obrigar login sempre que fechares o browser/tab
export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (!username || !password) {
      throw new Error('Preencha todos os campos');
    }

    sessionStorage.setItem('auth', 'true');
    sessionStorage.setItem('username', username);

    return Promise.resolve();
  },

  logout: async () => {
    sessionStorage.removeItem('auth');
    sessionStorage.removeItem('username');
    return Promise.resolve();
  },

  checkAuth: async () => {
    const isAuth = sessionStorage.getItem('auth');
    return isAuth ? Promise.resolve() : Promise.reject();
  },

  checkError: async (error) => {
    const status = error?.status;
    if (status === 401 || status === 403) {
      sessionStorage.removeItem('auth');
      sessionStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: async () => {
    const username = sessionStorage.getItem('username') || 'Utilizador';
    return Promise.resolve({
      id: '1',
      fullName: username,
      avatar: undefined,
    });
  },

  getPermissions: async () => Promise.resolve(),
};
