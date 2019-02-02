import ExpeditionReward from './expedition-reward';
export interface Expedition {
    id: number;
    seeds: number;
    duration: number;
    reward: ExpeditionReward[];
}