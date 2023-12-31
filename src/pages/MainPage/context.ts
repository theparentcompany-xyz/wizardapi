import { createContext } from 'react';
import { ProjectType } from '../../components/Sidebar/types';

interface userContextType {
  isLoggedIn: boolean;
  email: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  currentProject: ProjectType;
  setCurrentProject: (currentProject: ProjectType) => void;
  currentCollection: Collection;
  setCurrentCollection: (currentCollection: Collection) => void;
}

export const UserContext = createContext(<userContextType>{});

interface APIContextType {
  endpoints: APIData;
  setEndpoints: (apiData: APIData) => void;
}

export const APIContext = createContext(<APIContextType>{});
