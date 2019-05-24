import { PageDataService } from 'src/app/services/page-data.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import aviaryUpgradesList from '../../lists/aviaryUpgradesList';
import seedsUpgradesList from '../../lists/seedsUpgradesList';
import seedsStorageList from '../../lists/seedsStorageList';
import droppingsStorageList from '../../lists/droppingsStorageList';
import aviaryUpgrade from 'src/app/interfaces/aviary-upgrade';
import seedsUpgrade from 'src/app/interfaces/seeds-upgrade';
import { UpgradesService } from 'src/app/services/upgrades.service';
import seedsStorage from 'src/app/interfaces/seeds-storage';
import droppingsStorage from 'src/app/interfaces/droppings-storage';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.less']
})
export class UpgradesComponent implements OnInit {

  pageLoading: boolean = true;
  seedsUpgradesInfo: seedsUpgrade[] = seedsUpgradesList;
  aviaryUpgradesInfo: aviaryUpgrade[] = aviaryUpgradesList;
  seedsStorageInfo: seedsStorage[] = seedsStorageList;
  droppingsStorageInfo: droppingsStorage[] = droppingsStorageList;
  user: User;
  interval: any;

  currentSeedsUpgrade: seedsUpgrade;
  nextSeedsUpgrade: seedsUpgrade;
  currentAviaryUpgrade: aviaryUpgrade;
  nextAviaryUpgrade: aviaryUpgrade;
  currentSeedsStorage: seedsStorage
  nextSeedsStorage: seedsStorage;
  currentDroppingsStorage: droppingsStorage;
  nextDroppingsStorage: droppingsStorage;


  constructor(public upgradesService: UpgradesService, public pageDataService: PageDataService) { }

  ngOnInit() {
    this.getCurrentUpgrades();
    this.interval = setInterval(() => { this.upDateFrontInfo(); }, 1000);
  }

  async getCurrentUpgrades() {
    this.user = (await this.pageDataService.getHomePageData()).data;
    //const res: any = await this.upgradesService.getCurrentUpgrades();

    this.currentAviaryUpgrade = this.aviaryUpgradesInfo[this.user.aviarylvl];
    this.nextAviaryUpgrade = this.aviaryUpgradesInfo[this.user.aviarylvl + 1];
    this.currentSeedsUpgrade = this.seedsUpgradesInfo[this.user.farmlvl];
    this.nextSeedsUpgrade = this.seedsUpgradesInfo[this.user.farmlvl + 1];
    this.currentSeedsStorage = this.seedsStorageInfo[this.user.farmstoragelvl];
    this.nextSeedsStorage = this.seedsStorageInfo[this.user.farmstoragelvl + 1];
    this.currentDroppingsStorage = this.droppingsStorageInfo[this.user.droppingsstoragelvl];
    this.nextDroppingsStorage = this.droppingsStorageInfo[this.user.droppingsstoragelvl + 1];

   
    this.pageLoading = false;
  }

  async upgradeFarm() {
    await this.upgradesService.upgradeFarm();
    this.getCurrentUpgrades();
  }
  async upgradeAviary() {
    await this.upgradesService.upgradeAviary();
    this.getCurrentUpgrades();
  }
  async upgradeFarmStorage() {
    await this.upgradesService.upgradeFarmStorage();
    this.getCurrentUpgrades();
  }
  async upgradeDroppingsStorage() {
    await this.upgradesService.upgradeDroppingsStorage();
    this.getCurrentUpgrades();
  }

  upDateFrontInfo() {
    this.user.seeds = this.user.seeds < this.user.maxseeds ? this.user.seeds + (this.user.seedsminute / 60) : this.user.maxseeds;
    this.user.droppings = this.user.droppings < this.user.maxdroppings ? this.user.droppings + (this.user.totaldroppingsminute / 60) : this.user.maxdroppings;

  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }


}