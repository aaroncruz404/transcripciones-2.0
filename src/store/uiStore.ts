import { create } from 'zustand'

interface DropMenuState {
    showDropMenu: boolean,
    toggleShowDropMenu: () => void;
};

export const useDropMenuStore = create<DropMenuState>((set) => ({
    showDropMenu: false,
    toggleShowDropMenu: () => {
        set((state) => ({
            showDropMenu: !state.showDropMenu
        }));
    },
}));
