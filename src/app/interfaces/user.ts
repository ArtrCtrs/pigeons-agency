export interface User { 
    id: number;
    username: string;
    password: string;
    icon:string;
    lvl: number;
    birds:number;
    maxbirds: number;
    maxseeds:number;
    maxdroppings:number;
    maxexpeditions:number,
    seeds: number;
    seedsminute: number;
    droppings: number;
    totaldroppingsminute: number;
    feathers: number;
    xcoord: number;
    ycoord: number;
    lastupdate: number;
    farmlvl:number;
    aviarylvl:number;
    farmstoragelvl:number;
    droppingsstoragelvl:number;
    totalspentseeds:number;
    totalspentdroppings:number;
    totalspentfeathers:number;
    hasnotifications:boolean;
    istravelling:boolean;
    nextpossibleattack:number;
    protecteduntil:number;
    militaryscore:number;
    totalattacks:number;
    totalwinattacks:number;
    totaldefenses:number;
    totalwindefenses:number;
    creationtime:number;
    lastattack:number;
    honorpoints:number;
    legendaries:number;
    soldpigeons:number;
    eventparticipation:number;
}
