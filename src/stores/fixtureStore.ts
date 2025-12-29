import {defineStore} from "pinia";
import type {Fixture} from "@/api/models/fixture.model.ts";
import {ref} from "vue";
import {fixtureServices} from "@/api/services/fixture.services.ts";

export const useFixtureStore = defineStore("fixtureStore", () => {
    const fixtures = ref<Fixture[]>([]);
    const loading = ref(false);

    async function fetchFixtures() {
        const {data} = await fixtureServices.findAll();
        loading.value = true;
        fixtures.value = data as Fixture[];
        loading.value = false;
    }

    async function createFixtures() {
        const {data} = await fixtureServices.generateFixtures();
        loading.value = true;
        fixtures.value = data;
        loading.value = false;
    }

    return {fixtures, loading, fetchFixtures, createFixtures}
})