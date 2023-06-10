import { combineReducers, configureStore } from '@reduxjs/toolkit';

import dataSlice from './data-slice';

const reducer = combineReducers({
    data: dataSlice.reducer
});

const store = configureStore({
    reducer: reducer
})

export default store;
export type RootState = ReturnType<typeof reducer>