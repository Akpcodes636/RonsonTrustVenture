import { create } from "zustand";

interface StepState {
    step: number;
    setStep: (newStep: number) => void;
}

export const useStep = create<StepState>((set) => ({
    step:1,
    setStep: (newStep) => set({ step: newStep }),
}));