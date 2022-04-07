import * as api from '../../api/index';
import * as actionTypes from '../../utilities/actionTypes';

export const getExpenseByLedger = (ledgerId) => async (dispatch) => {
    try {
        const {data} = await api.expensebyledger(ledgerId);
        dispatch({type:actionTypes.EXPENSE_FETCHALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createExpense = (objExpense) => async (dispatch) => {
    try {
        const {data} = await api.expensecreate(objExpense);
        dispatch({type: actionTypes.EXPENSE_CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateExpense = (objExpense) => async (dispatch) => {
    try {
        const {data} = await api.expenseupdate(objExpense);
        dispatch({type: actionTypes.EXPENSE_UPDATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}