import { configureStore } from '@reduxjs/toolkit';
import cartStore from '@store/cart';
import historyStore from '@store/history';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from 'redux';
import { apiServiceProducts } from '@api/apiServiceProducts';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [apiServiceProducts.reducerPath]: apiServiceProducts.reducer,
  cartStore: persistReducer(rootPersistConfig, cartStore),
  historyStore: persistReducer(rootPersistConfig, historyStore),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiServiceProducts.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
