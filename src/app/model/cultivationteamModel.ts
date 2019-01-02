import { OtherExpensesModel } from "./otherExpensesModel";

export class CultivationteamModel {

    public cultivationTeamName: String;
    public cultivationAmountPerTon: String;
    public foodExpense: String;
    public extraAmount: String;
    public otherExpenses : OtherExpensesModel[];
   

    public getCultivationTeamName()
    {
        return this.cultivationTeamName;
    }

    public getCultivationAmountPerTon()
    {
        return this.cultivationAmountPerTon;
    }
    public getFoodExpense()
    {
        return this.foodExpense;
    }
    public getExtraAmount()
    {
        return this.extraAmount;
    }

    public getOtherExpenses()
    {
        return this.otherExpenses;
    } 

    public setcultivationTeamName(cultivationTeamName: String)
    {
         this.cultivationTeamName = cultivationTeamName;
    }

    public setCultivationAmountPerTon(cultivationAmountPerTon: String)
    {
         this.cultivationAmountPerTon = cultivationAmountPerTon;
    }
    public setFoodExpense(foodExpense: String)
    {
         this.foodExpense = foodExpense;
    }
    public setExtraAmount(extraAmount: String)
    {
         this.extraAmount = extraAmount;
    }

    public setOtherExpenses(otherExpenses : OtherExpensesModel[])
    {
         this.otherExpenses = otherExpenses;
    } 

}