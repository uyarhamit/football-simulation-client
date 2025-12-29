import type {TeamDto} from "@/api/dto/team.dto.ts";

export interface TableDto {
    id: number;
    teamId: number;
    played: number;
    won: number;
    draw: number;
    lose: number;
    goalFor: number;
    goalAway: number;
    goalDiff: number;
    points: number;
    team: TeamDto;
}