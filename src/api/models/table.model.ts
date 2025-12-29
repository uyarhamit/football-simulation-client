import type {Team} from "@/api/models/team.model.ts";

export interface Table {
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
    team: Team;
}