import * as actionTypes from '../../utilities/actionTypes';

export const friendReducer = (friends = [], action) => {
    switch (action.type) {
        case actionTypes.FRIEND_FETCHALL:
            return action.payload;
        case actionTypes.FRIEND_CREATE:
            return [...friends, action.payload];
        case actionTypes.FRIEND_UPDATE:
            const index = friends.findIndex(f => f._id === action.payload._id);
            const newArray = [...friends];
            newArray[index].name = action.payload.name;
            newArray[index].optional = action.payload.optional;
            return newArray;
        case actionTypes.FRIEND_DELETE:
            return [...friends, friends.filter( x=> x._id !== action.payload)];
        default:
            return friends;
    }
}