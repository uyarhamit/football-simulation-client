import {http} from "@/api/http.ts";
import type {FixtureDto} from "@/api/dto/fixture.dto.ts";
import type {BaseResponseDto} from "@/api/dto/baseResponse.dto.ts";

export const fixtureServices = {
    async findAll(): Promise<BaseResponseDto<FixtureDto[]>> {
        const { data } = await http.get<BaseResponseDto<FixtureDto[]>>("/fixture");
        return data;
    },
    async generateFixtures(): Promise<BaseResponseDto<FixtureDto[]>> {
        const { data } = await http.post<BaseResponseDto<FixtureDto[]>>("/fixture/generate");
        return data;
    }
}