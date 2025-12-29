import {defineStore} from "pinia";
import {ref} from "vue";
import type {Team} from "@/api/models/team.model.ts";
import {TeamServices} from "@/api/services/team.services.ts";

export const useTeamStore = defineStore("teamStore",() => {
    const teams = ref<Team[]>([]);
    const loading = ref(false);

    async function fetchTeams() {
        const { data } = await TeamServices.findAll();
        loading.value = true;
        teams.value = data;
        loading.value = false;
    }

    return {teams, loading, fetchTeams}
})