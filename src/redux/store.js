import { configureStore ,combineReducers,
} from '@reduxjs/toolkit'

import userReducer from '../redux/slices/userSlice'



const reducer = combineReducers({
  user: userReducer
});
export const store = configureStore({
 reducer,
 // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})
//sagaMiddleware.run(watcherSaga);