import { Component, OnInit } from '@angular/core';
import aviaryUpgradesList from '../../lists/aviaryUpgradesList';
import seedsUpgradesList from '../../lists/seedsUpgradesList';
import aviaryUpgrade from 'src/app/interfaces/aviary-upgrade';
import seedsUpgrade from 'src/app/interfaces/seeds-upgrade';
import { UpgradesService } from 'src/app/services/upgrades.service';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.less']
})
export class UpgradesComponent implements OnInit {

  pageLoading: boolean = true;
  seedsUpgradesInfo: seedsUpgrade[] = seedsUpgradesList;
  aviaryUpgradesInfo: aviaryUpgrade[]=aviaryUpgradesList;
  currentSeedsUpgrade:seedsUpgrade;
  currentAviaryUpgrade:aviaryUpgrade;

  constructor(public upgradesService: UpgradesService) { }

  ngOnInit() {
    this.getCurrentUpgrades();
    console.log(this.seedsUpgradesInfo)
  }

  async getCurrentUpgrades() {
    const res:any = await this.upgradesService.getCurrentUpgrades();
    
    console.log(res)
    
    this.currentAviaryUpgrade=this.aviaryUpgradesInfo[res.data.aviarylvl];
    this.currentSeedsUpgrade=this.seedsUpgradesInfo[res.data.farmlvl];
    
    this.pageLoading = false;
  }

  async upgradeFarm(){
    await this.upgradesService.upgradeFarm();
    this.getCurrentUpgrades();
  }
  async upgradeAviary(){
    await this.upgradesService.upgradeAviary();
    this.getCurrentUpgrades();
  }

  
}