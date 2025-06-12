import { create } from "zustand"

interface BookingModalState {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useBookingModal = create<BookingModalState>()((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}))
