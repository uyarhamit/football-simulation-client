import {defineStore} from "pinia";
import {ref} from "vue";
import {simulationServices} from "@/api/services/simulation.services.ts";
import type {BaseResponseDto} from "@/api/dto/baseResponse.dto.ts";
import type {Fixture} from "@/api/models/fixture.model.ts";

export const useSimulationStore = defineStore("simulationStore",() =>{
    const loading = ref(false);

    async function startSimulationAll(): Promise<boolean>{
        loading.value = true;
        const { data } = await simulationServices.simulateAllFixtures();
        loading.value = false;
        return true;
    }

    async function startSimulationById(id: number): Promise<Fixture> {
        loading.value = true;
        const { data } = await simulationServices.simulateFixtureById(id);
        loading.value = false;
        return data;
    }

    return {startSimulationAll, startSimulationById, loading}
})