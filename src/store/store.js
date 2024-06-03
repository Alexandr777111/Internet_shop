import { defineStore } from "pinia";


export const useBagStore = defineStore("bag", {
  state: () => {
    return { 
      bag: JSON.parse(localStorage.getItem('bag')) || []
    };
  },
  getters: {
    totalPrice() {
      return this.bag.reduce((total, item) => total + item.Price * item.quantity, 0);
    },
    totalCount() {
      return this.bag.reduce((total, item) => total + item.quantity, 0);
    }
  },
  actions: {
    add(item) {
      const existingItem = this.bag.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.bag.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('bag', JSON.stringify(this.bag))
    },
 
    delete(index) {
      this.bag.splice(index, 1)
      localStorage.setItem('bag', JSON.stringify(this.bag));
    },
  },
});

