import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from './root-reducer';


// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';

// import { rootSaga } from './root-saga';

// import { rootReducer } from './root-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['user'],
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'development' && logger].filter(Boolean);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares
});

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);