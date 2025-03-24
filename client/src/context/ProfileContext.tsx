// ProfileContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAlert } from './AlertContext';

interface Profile {
  name: string;
  email: string;
  role: string;
  sole_trader: boolean;
}

interface ProfileContextType {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
  refreshProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const fetchRequest = async ({ method, url }: { method: string; url: string }) => {
  const response = await fetch(url, { method });
  if (!response.ok) throw new Error('Failed to fetch profile');
  return await response.json();
};

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showAlert } = useAlert();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetchRequest({
        method: 'GET',
        url: 'http://localhost:5174/api/profile',
      });
      setProfile(response);
      setError(null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to fetch profile.");
      showAlert("Error!", "An error occurred while fetching the profile. Please try again later.", "error", true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, isLoading, error, refreshProfile: getProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used within a ProfileProvider');
  return context;
};
