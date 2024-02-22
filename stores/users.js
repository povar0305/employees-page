import {defineStore} from 'pinia'
import axios from "axios";

export const useUsers = defineStore('users', {
    state: () => ({
        users: [],
    }),
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                this.users = data.data
            } catch (error) {
                console.log(error);
            }
        },
    }
})