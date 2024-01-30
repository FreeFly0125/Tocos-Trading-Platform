import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import { store } from "./store";
import { PATH } from "./consts";
import { DashboardPage } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;