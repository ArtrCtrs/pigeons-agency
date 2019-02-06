import ExpeditionReward from './expedition-reward';
export interface ExpeditionInfo {
    id: number;
    seeds: number;
    duration: number;
    name:string;
    reward: ExpeditionReward[];
}