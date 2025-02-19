import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const storeProduct = create(persist((set) => ({
  // data
  products: [],

  //function
  addProduct: (data) => set((state) => ({ products: [data, ...state.products] }))
}), {
  name: "product-store",
  storage: createJSONStorage(() => localStorage)
}))

export default storeProduct;