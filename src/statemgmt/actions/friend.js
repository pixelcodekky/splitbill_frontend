import * as api from '../../api/index';

import * as actionTypes from '../../utilities/actionTypes';

//Friend
export const getallfriend = () => async (dispatch) => {
    try {
        const {data} = await api.friends();
        dispatch({type: actionTypes.FRIEND_FETCHALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createfriend = (objfri) => async (dispatch) => {
    try {
        const {data} = await api.fricreate(objfri);
        dispatch({type: actionTypes.FRIEND_CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatefriend = (objfri) => async (dispatch) => {
    try {
        const {data} = await api.friupdate(objfri);
        dispatch({type: actionTypes.FRIEND_UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletefriend = (objId) => async (dispatch) => {
    try {
        const {data} = await api.fridelete(objId);
        dispatch({type:actionTypes.FRIEND_DELETE, payload: objId});
    } catch (error) {
        console.log(error);
    }
}
