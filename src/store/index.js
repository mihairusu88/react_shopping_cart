import { configureStore } from '@reduxjs/toolkit';
import cartStore from '@store/cart';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cartStore: persistReducer(rootPersistConfig, cartStore),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
