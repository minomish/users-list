import { create } from 'zustand'
import { SelectedUserStore } from '../types/types'

export const useSelectUserStore = create<SelectedUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null}),
}));




  