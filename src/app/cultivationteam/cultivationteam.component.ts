import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CultivationteamModel } from '../model/cultivationteamModel';
import { OtherExpenseResponse } from '../model/OtherExpenseResponse';

@Component({
  selector: 'app-cultivationteam',
  templateUrl: './cultivationteam.component.html',
  styleUrls: ['./cultivationteam.component.css']
})
export class CultivationteamComponent implements OnInit {

  public cultivationTeamName: String;
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

  constructor() { }

  ngOnInit() {
  }

  showCultivationTeam() {
    this.showCultivationTeamDetail = true;
    
    this.cultivationTeamModel1 = new CultivationteamModel();
    this.cultivationTeamModel1.setcultivationTeamName("Team1");
    this.cultivationTeamModel1.setCultivationAmountPerTon("1");
    this.cultivationTeamModel1.setFoodExpense("2");
    this.cultivationTeamModel1.setExtraAmount("3");
  

    this.cultivationTeamModel2 = new CultivationteamModel();
    this.cultivationTeamModel2.setcultivationTeamName("Team2");
    this.cultivationTeamModel2.setCultivationAmountPerTon("25");
    this.cultivationTeamModel2.setFoodExpense("50");
    this.cultivationTeamModel2.setExtraAmount("100");

    this.teams.push(this.cultivationTeamModel1);
    this.teams.push(this.cultivationTeamModel2);
  }
  saveCultivationTeamDetails() {
    console.log("cultivation Deatil Data---",this.teams);
    this.orderWantsToKnowCultivationDataEvent.emit(this.teams);
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
