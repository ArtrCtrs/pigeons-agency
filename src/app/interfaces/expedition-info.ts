import ExpeditionReward from './expedition-reward';
export interface ExpeditionInfo {
    id: number;
    seeds: number;
    duration: number;
    reward: ExpeditionReward[];
}