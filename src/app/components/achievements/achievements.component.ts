import { AchievementsPageDataAPIReturn } from './../../services/achievement.service';
import { Achievement } from './../../interfaces/achievement';
import { Component, OnInit } from '@angular/core';
import { AchievementsService } from 'src/app/services/achievement.service';
import achievementsList from '../../lists/achievementsList';
import { User } from 'src/app/interfaces/user';
import userAchievements from 'src/app/interfaces/userAchievements';

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.less']
})
export class AchievementsComponent implements OnInit {

    achievements: Achievement[] = [];
    user: User;
    userachievements: userAchievements;
    filteredAchievements: Achievement[] = [];

    constructor(public achievementsService: AchievementsService) { }

    async ngOnInit() {
        this.achievements = achievementsList;
        this.filteredAchievements = this.achievements;
        this.initAchievements();
    }

    async initAchievements() {
        const info: AchievementsPageDataAPIReturn = await this.achievementsService.getAchievements();
        this.user = info.data.user;
        this.userachievements = info.data.userAchievements;
    }

    async claimAchievement(id: string) {
        const info: AchievementsPageDataAPIReturn = await this.achievementsService.claimAchievement({
            id: id
        });
        this.user = info.data.user;
        this.userachievements = info.data.userAchievements;
    }
    changeFilter(value) {
        if (value == "all") {
            this.filteredAchievements = this.achievements;
        } else {
            this.filteredAchievements = this.achievements.filter(obj => {
                return obj.attribute === value
            })
        }

    }

    // filterAchievements(query: string) {
    //     this.filteredAchievements = this.achievements.filter(value => value.name.toLowerCase().includes(query));
    // }
}
export interface AchievementsPageDataAPIReturn {
    message: string;
    data: {
        user: User,
        userAchievements: userAchievements

    }
}