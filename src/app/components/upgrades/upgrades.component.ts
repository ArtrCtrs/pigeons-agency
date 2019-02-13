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

  currentSeedsUpgrade: seedsUpgrade;
  nextSeedsUpgrade: seedsUpgrade;
  currentAviaryUpgrade: aviaryUpgrade;
  nextAviaryUpgrade: aviaryUpgrade;
  currentSeedsStorage: seedsStorage
  nextSeedsStorage: seedsStorage;
  currentDroppingsStorage: droppingsStorage;
  nextDroppingsStorage: droppingsStorage;


  constructor(public upgradesService: UpgradesService) { }

  ngOnInit() {
    this.getCurrentUpgrades();
  }

  async getCurrentUpgrades() {
    const res: any = await this.upgradesService.getCurrentUpgrades();

    this.currentAviaryUpgrade = this.aviaryUpgradesInfo[res.data.aviarylvl];
    this.nextAviaryUpgrade = this.aviaryUpgradesInfo[res.data.aviarylvl + 1];
    this.currentSeedsUpgrade = this.seedsUpgradesInfo[res.data.farmlvl];
    this.nextSeedsUpgrade = this.seedsUpgradesInfo[res.data.farmlvl + 1];
    this.currentSeedsStorage = this.seedsStorageInfo[res.data.farmstoragelvl];
    this.nextSeedsStorage = this.seedsStorageInfo[res.data.farmstoragelvl + 1];
    this.currentDroppingsStorage = this.droppingsStorageInfo[res.data.droppingsstoragelvl];
    this.nextDroppingsStorage = this.droppingsStorageInfo[res.data.droppingsstoragelvl + 1];


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


}