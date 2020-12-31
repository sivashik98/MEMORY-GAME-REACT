import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import App from "../App";
import configureStore from "../store/configureStore";
// import rootSaga from "../store/sagas";

const sagaMiddleware = createSagaMiddleware();
const { store, persistent } = configureStore({}, sagaMiddleware);
// sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistent}
      >
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Root;
