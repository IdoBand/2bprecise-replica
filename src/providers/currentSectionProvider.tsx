import { createContext, Dispatch, SetStateAction } from "react";

export interface CurrentSectionProps {
    currentSection: string;
    setCurrentSection: Dispatch<SetStateAction<string>>;
}

export const currentSectionContext = createContext<CurrentSectionProps | null>(null);
