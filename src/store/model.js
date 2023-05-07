import { defineStore } from "pinia";

export const useModelStore = defineStore("modelStore", {
  state: () => ({
    models: [],
  }),
  getters: {
    getModels: (state) => state.models,
    getModelById: (state) => (id) => {
      return state.models.find((model) => model.id === id);
    },
  },
  actions: {
    loadModels() {
      const localModels = JSON.parse(localStorage.getItem("models"));
      if (localModels) {
        this.models = localModels;
      } else {
        this.models = defaultModels;
      }
    },
    addModel(newModel) {
      this.models.push(newModel);
      localStorage.setItem("models", JSON.stringify(this.models));
    },
    deleteModel(id) {
      this.models = this.models.filter((model) => model.id !== id);
      localStorage.setItem("models", JSON.stringify(this.models));
    },
    saveModel(editedModel) {
      this.models = this.models.map((model) => {
        if (model.id === editedModel.id) {
          return editedModel;
        }
        return model;
      });
      localStorage.setItem("models", JSON.stringify(this.models));
    },
  },
});
