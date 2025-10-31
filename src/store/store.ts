import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import uiReducer from './slices/uiSlice';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
