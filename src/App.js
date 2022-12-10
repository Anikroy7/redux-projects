import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes/routes";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
