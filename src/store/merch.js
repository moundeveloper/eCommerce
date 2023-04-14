import { defineStore } from "pinia";

export const useMerchStore = defineStore("merchStore", {
  state: () => {
    return { merch: ["hey"] };
  },
  getters: {
    getMerch: (state) => state.merch,
  },
  actions: {
    loadMerch() {
      /* TO-DO */
    },
    setMerch() {
      /* TO-DO */
    },
    addMerch() {
      /* TO-DO */
    },
    removeMerch() {
      /* TO-DO */
    },
  },
});
