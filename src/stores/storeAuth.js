import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const storeAuth = create(persist((set) => ({
  // data
  token: '',

  //function
  setToken: (token) => set({ token })
}), {
  name: "auth-store",
  storage: createJSONStorage(() => localStorage)
}))

export default storeAuth;