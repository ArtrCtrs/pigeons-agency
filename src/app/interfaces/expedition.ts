export default interface Expedition {
    id: number;
    type: number;
    lvl: string;
    starttime: number;
    duration: number;
    finished: boolean;
    ownerid: number;
}