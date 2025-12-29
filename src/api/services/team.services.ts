import {http} from "@/api/http.ts";
import type {TeamDto} from "@/api/dto/team.dto.ts";
import type {BaseResponseDto} from "@/api/dto/baseResponse.dto.ts";

export const TeamServices = {
    async findAll(): Promise<BaseResponseDto<TeamDto[]>> {
        const { data } = await http.get<BaseResponseDto<TeamDto[]>>("/teams");
        return data;
    }
}