import { OtherExpensesModel } from '../model/otherExpensesModel';

export class OtherExpenseResponse {
    constructor(
        public otherExpensesModel: OtherExpensesModel[],
        public teamID: String
        ){}
}