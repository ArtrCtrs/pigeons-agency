import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Achievement } from '../interfaces/achievement';
import { User } from '../interfaces/user';
import userAchievements from '../interfaces/userAchievements';

@Injectable({
    providedIn: 'root'
})
export class AchievementsService {
    constructor(private http: HttpClient) { }

    getAchievements(): Promise<AchievementsPageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'achievements', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: AchievementsPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    claimAchievement(req: string): Promise<AchievementsPageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'achievements', req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: AchievementsPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
}

export interface AchievementsPageDataAPIReturn {
    message: string;
    data: {
        user: User,
        userAchievements: userAchievements

    }
}