import { combineReducers } from "redux";
import { friendReducer } from './friend';
import { ledgerReducer } from './ledger';
import { expenseReducer } from "./expense";

export default combineReducers({
    friend: friendReducer,
    ledger: ledgerReducer,
    expense: expenseReducer
});