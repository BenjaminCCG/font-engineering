import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Eduardo'
  })
});

export default useUserStore;
