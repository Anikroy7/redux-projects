import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <ToastContainer />
    </div>
  );
}

export default App;
