import * as actionTypes from '../../utilities/actionTypes';

export const ledgerReducer = (ledger = [], action) => {
    switch(action.type){
        case actionTypes.LEDGER_FETCHALL:
            return action.payload;
        case actionTypes.LEDGER_CREATE:
            return [...ledger, action.payload];
        case actionTypes.LEDGER_UPDATE:
            const index = ledger.findIndex(f => f._id === action.payload._id);
            const newArray = [...ledger];
            newArray[index] = action.payload;
            return newArray;
        case actionTypes.LEDGER_DELETE:
            return [...ledger, ledger.filter(x => x._id !== action.payload)];
        default:
            return ledger;
    }
}