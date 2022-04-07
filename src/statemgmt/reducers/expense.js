import * as actionTypes from '../../utilities/actionTypes';

export const expenseReducer = (expenses = [], action) => {
    switch (action.type) {
        case actionTypes.EXPENSE_FETCHALL:
            return action.payload;
        case actionTypes.EXPENSE_CREATE:
            return [...expenses, action.payload];
        case actionTypes.EXPENSE_UPDATE:
            const index = expenses.findIndex(f => f._id === action.payload._id);
            const newArray = [...expenses];
            newArray[index] = action.payload;
            return newArray;
        case actionTypes.EXPENSE_DELETE:
            return [...expenses, expenses.filter(x => x._id !== action.payload)];
        default:
            return expenses;
    }
}