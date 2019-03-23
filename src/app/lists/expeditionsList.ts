import { ExpeditionInfo } from '../interfaces/expedition-info';


const expeditionsList:ExpeditionInfo[] =
    [{
        id: 0,
        seeds: 10,
        duration: 15000,
        name:"Garden run",
        reward: [{
            pigeontype: 0,
            probability: 60
        },
        {
            pigeontype: 1,
            probability: 90
        },
        {
            pigeontype: 2,
            probability: 95
        },
        {
            pigeontype: 5,
            probability: 101
        }]
    },
    {
        id: 1,
        seeds: 100,
        duration: 60000,
        name:"Big garden run",
        reward: [{
            pigeontype: 0,
            probability: 15
        },
        {
            pigeontype: 1,
            probability: 30
        },
        {
            pigeontype: 2,
            probability: 45
        },
        {
            pigeontype: 3,
            probability: 50
        },
        {
            pigeontype: 5,
            probability: 75
        }
        ,
        {
            pigeontype: 6,
            probability: 90
        }
        ,
        {
            pigeontype: 7,
            probability: 101
        }]
    },
    {
        id: 2,
        seeds: 500,
        duration: 90000,
        name:"Under neighbor's car",
        reward: [{
            pigeontype: 1,
            probability: 5
        },
        {
            pigeontype: 2,
            probability: 20
        },
        {
            pigeontype: 3,
            probability: 45
        },
        {
            pigeontype: 4,
            probability: 50
        },
        {
            pigeontype: 5,
            probability: 60
        }
        ,
        {
            pigeontype: 6,
            probability: 75
        }
        ,
        {
            pigeontype: 7,
            probability: 90
        },
        {
            pigeontype: 8,
            probability: 101
        }]
    },
    {
        id: 3,
        seeds: 2000,
        duration: 180000,
        name:"At neighbor's window",
        reward: [{
            pigeontype: 1,
            probability: 5
        },
        {
            pigeontype: 2,
            probability: 20
        },
        {
            pigeontype: 3,
            probability: 45
        },
        {
            pigeontype: 4,
            probability: 50
        },
        {
            pigeontype: 5,
            probability: 60
        }
        ,
        {
            pigeontype: 6,
            probability: 75
        }
        ,
        {
            pigeontype: 7,
            probability: 90
        },
        {
            pigeontype: 8,
            probability: 101
        }]
    }]

export default expeditionsList;

