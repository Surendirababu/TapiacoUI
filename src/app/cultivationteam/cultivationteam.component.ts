import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { CultivationteamModel } from '../model/cultivationteamModel';
import { OtherExpenseResponse } from '../model/OtherExpenseResponse';
import { TeamNameEnum } from '../model/teamNameEnum';

@Component({
  selector: 'app-cultivationteam',
  templateUrl: './cultivationteam.component.html',
  styleUrls: ['./cultivationteam.component.css']
})
export class CultivationteamComponent implements OnInit {

  public cultivationTeamName = [TeamNameEnum.TEAM_1,TeamNameEnum.TEAM_2,TeamNameEnum.TEAM_3];
  public cultivationAmountPerTon: String;

  public teams:CultivationteamModel[] =new Array<CultivationteamModel>();
  public showCultivationTeamDetail:boolean = false;
  public showOtherExpensesDetail:boolean = false
  @Output()
  public orderWantsToKnowCultivationDataEvent:EventEmitter<Object> = new EventEmitter<Object>();
  public otherExpenseData:OtherExpenseResponse;

  public cultivationTeamModel1 : CultivationteamModel;
  public cultivationTeamModel2 : CultivationteamModel;
  public cultivationTeamModel3 : CultivationteamModel;

  @Input()
  public orderFarmData:Object;

  constructor() { }

  ngOnInit() {
  }

  showCultivationTeam() {
    this.showCultivationTeamDetail = true;
    
    this.cultivationTeamModel1 = new CultivationteamModel();
    this.cultivationTeamModel1.setcultivationTeamName("");
    this.cultivationTeamModel1.setCultivationAmountPerTon("");
    this.cultivationTeamModel1.setFoodExpense("");
    this.cultivationTeamModel1.setExtraAmount("");
  

    this.teams.push(this.cultivationTeamModel1);
  }
  saveCultivationTeamDetails() {
    console.log("order form data---",this.orderFarmData);
    console.log("cultivation Deatil Data---",this.teams);
    this.orderWantsToKnowCultivationDataEvent.emit(this.teams);
  }

  confirmOrder(){
    console.log("order form data---",this.orderFarmData);
    console.log("cultivation Deatil Data---",JSON.stringify(this.teams));
    alert("Your Order has been saved successfully!!!")
  }
  

  addAnotherTeam(){
    this.cultivationTeamModel3 = new CultivationteamModel();
    this.cultivationTeamModel3.setcultivationTeamName("");
    this.cultivationTeamModel3.setCultivationAmountPerTon("");
    this.cultivationTeamModel3.setFoodExpense("");
    this.cultivationTeamModel3.setExtraAmount("");
    this.teams.push(this.cultivationTeamModel3);
  }

  cultivationTeamWantsToKnowOtherExpenseDataFn(eventData : OtherExpenseResponse)
  {
    this.otherExpenseData = eventData;
    for (let i = 0; i < this.teams.length; i++) { 
      if(this.teams[i].cultivationTeamName == eventData.teamID)
      {
        this.teams[i].setOtherExpenses(this.otherExpenseData.otherExpensesModel)
      }
    }
  }

  public deletePreviousTeam()
  {
    this.teams.pop();
  } 
}
