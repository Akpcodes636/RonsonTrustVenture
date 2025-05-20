import { create } from "zustand";

interface StepState {
    step: number;
    setStep: (newStep: number | ((prev: number) => number)) => void;
}

export const useStep = create<StepState>((set) => ({
    step: 0,
    setStep: (newStep) =>
        set((state) => ({
            step: typeof newStep === "function" ? newStep(state.step) : newStep,
        })),
}));