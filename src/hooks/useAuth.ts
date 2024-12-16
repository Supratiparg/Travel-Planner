import { useState, useCallback } from 'react';
import type { AuthState, SignUpFormData, User } from '../types/auth';

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });

  const signUp = useCallback(async (formData: SignUpFormData) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        name: formData.name,
        createdAt: new Date(),
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      
      return user;
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to sign up. Please try again.',
      }));
      throw error;
    }
  }, []);

  return {
    ...authState,
    signUp,
  };
}