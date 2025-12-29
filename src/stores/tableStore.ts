import {defineStore} from "pinia";
import {ref} from "vue";
import type {Table} from "@/api/models/table.model.ts";
import type {BaseResponseDto} from "@/api/dto/baseResponse.dto.ts";
import type {TableDto} from "@/api/dto/table.dto.ts";
import {TableServices} from "@/api/services/table.services.ts";

export const UseTableStore = defineStore('userTableStore', () =>{
    const tableData = ref<Table[]>([]);
    const loading = ref(false);

    async function fetchTableData() {
        const { data } = await TableServices.findAll();
        loading.value = true;
        tableData.value = data;
        loading.value = false;
    }

    return {tableData, loading, fetchTableData}
})