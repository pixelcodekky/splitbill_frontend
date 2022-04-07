import * as api from '../../api/index';

import * as actionTypes from '../../utilities/actionTypes';

export const getallLedger = () => async (dispatch) => {
    try {
        const { data } = await api.ledgers();
        dispatch({type: actionTypes.LEDGER_FETCHALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const addLedger = (objledger) => async (dispatch) => {
    try {
        const {data} = await api.ledgercreate(objledger);
        dispatch({type: actionTypes.LEDGER_CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateLedger = (objledger) => async (dispatch) => {
    try {
        const {data} = await api.ledgerupdate(objledger);
        dispatch({type: actionTypes.LEDGER_UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}