import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './slices/contactSlice';
import { filterReducer } from './slices/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
