import type { TeamDto } from "@/api/dto/team.dto.ts";

export interface FixtureDto {
    id: number;
    week: number;
    homeTeamId: number;
    awayTeamId: number;
    homeGoal: number;
    awayGoal: number;
    played: boolean;
    homeTeam: TeamDto;
    awayTeam: TeamDto;
}