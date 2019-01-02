import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { OtherExpensesModel } from '../model/otherExpensesModel';
import { ExpenseDoneForTypeEnum } from '../model/ExpenseDoneForTypeEnum'
import { OtherExpenseResponse } from '../model/OtherExpenseResponse';
import { ExpenseTypeEnum } from '../model/ExpenseTypeEnum'

@Component({
  selector: 'app-otherexpenses',
  templateUrl: './otherexpenses.component.html',
  styleUrls: ['./otherexpenses.component.css']
})
export class OtherexpensesComponent implements OnInit { 

  public expenseDoneFor: String;
  public extraAmount: String;
  public expenseDoneType : String;
  public showOtherExpensesDetail:boolean = false
  public otherExpenses:OtherExpensesModel[] =new Array<OtherExpensesModel>();
  public expenseDoneForTypes = [ExpenseDoneForTypeEnum.TravelAllowance,ExpenseDoneForTypeEnum.Eveningsnacks,ExpenseDoneForTypeEnum.Extrawage];
  public expenseDoneTypes = [ExpenseTypeEnum.ONETIME,ExpenseTypeEnum.PERTON];
  @Output()
  public cultivationTeamWantsToKnowOtherExpenseDataEvent :EventEmitter<OtherExpenseResponse> = new EventEmitter<OtherExpenseResponse>();
  @Input()
  public teamID : String;
  public otherExpenseResponse : OtherExpenseResponse;

  constructor() { }

  ngOnInit() {
  }



  showOtherExpenses() {
    this.showOtherExpensesDetail = true;
    this.otherExpenses.push(new OtherExpensesModel(this.expenseDoneFor,this.extraAmount,this.expenseDoneType));
    this.otherExpenses.push(new OtherExpensesModel(this.expenseDoneFor,this.extraAmount,this.expenseDoneType));
  }
  saveOtherExpenseDetails() {

    this.otherExpenseResponse =  new OtherExpenseResponse(this.otherExpenses,this.teamID);
    this.cultivationTeamWantsToKnowOtherExpenseDataEvent.emit(this.otherExpenseResponse);
  }
  

  addAnotherExpense(){
    this.otherExpenses.push(new OtherExpensesModel("","",""));
  }

  deletePreviousExpense(){
    this.otherExpenses.pop();
  }
}
