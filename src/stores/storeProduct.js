import { create } from 'zustand'

const storeProduct = create((set) => ({
  // data
  products: [],

  //function
  addProduct: (data) => set((state) => ({ products: [data, ...state.products] }))
}))

export default storeProduct;