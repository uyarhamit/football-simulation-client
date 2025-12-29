import type {Team} from "@/api/models/team.model.ts";

export interface Fixture {
    id: number;
    week: number;
    homeTeamId: number;
    awayTeamId: number;
    homeGoal: number;
    awayGoal: number;
    played: boolean;
    homeTeam: Team;
    awayTeam: Team;
}