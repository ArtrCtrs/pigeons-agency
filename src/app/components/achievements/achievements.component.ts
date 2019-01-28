import { Achievement } from '../../shared/interfaces/achievement';
import { AchievementsService } from '../../shared/services/achievement.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.less']
})
export class AchievementsComponent implements OnInit {

    filteredAchievements: Achievement[] = [];
    achievements: Achievement[] = [];

    constructor(public achievementsService: AchievementsService) { }

    ngOnInit() {
        this.initAchievements();
    }

    async initAchievements() {
        this.achievements = await this.achievementsService.getAchievements();
        this.filteredAchievements = this.achievements;
    }

    filterAchievements(query: string) {
        this.filteredAchievements = this.achievements.filter(value => value.name.toLowerCase().includes(query));
    }
}