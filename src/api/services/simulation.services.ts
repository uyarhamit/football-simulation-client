import type {BaseResponseDto} from "@/api/dto/baseResponse.dto.ts";
import type {FixtureDto} from "@/api/dto/fixture.dto.ts";
import {http} from "@/api/http.ts";

export const simulationServices = {

    async simulateAllFixtures(): Promise<BaseResponseDto<FixtureDto[]>> {
        const { data } = await http.post(`/simulation/all`);
        return data;
    },
    async simulateFixtureById(id: number): Promise<BaseResponseDto<FixtureDto>> {
        const { data } = await http.post<BaseResponseDto<FixtureDto>>(`/simulation/${id}`);
        return data;
    }

}