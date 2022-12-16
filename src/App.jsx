// import "./App.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "./app/store";
import AppRouter from "./Router/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
      <ToastContainer />
    </Provider>
  );
}

export default App;
