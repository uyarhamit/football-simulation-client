import type {BaseResponseDto} from "@/api/dto/baseResponse.dto.ts";
import type {TableDto} from "@/api/dto/table.dto.ts";
import {http} from "@/api/http.ts";

export const TableServices = {
    async findAll(): Promise<BaseResponseDto<TableDto[]>> {
        const { data } = await http.get<BaseResponseDto<TableDto[]>>(`/table`);
        return data;
    }
}