import { OtherExpensesModel } from "./otherExpensesModel";

export class CultivationteamModel {

    public cultivationTeamName: String;
    public cultivationAmountPerTon: String;
    public foodExpense: String;
    public extraAmount: String;
    public otherExpenses : OtherExpensesModel[];
    public amountPaid: String;
    public totalAmount: String;
    public remarks: String;

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
    
    public getAmountPaid()
    {
        return this.amountPaid;
    }
    public getTotalAmount()
    {
        return this.totalAmount;
    }
    public getRemarks()
    {
        return this.remarks;
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
    public setAmountPaid(amountPaid : String)
    {
         this.amountPaid = amountPaid;
    }
    public setTotalAmount(totalAmount : String)
    {
         this.totalAmount = totalAmount;
    }
    public setRemarks(remarks : String)
    {
         this.remarks = remarks;
    }
}