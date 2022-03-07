import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Router />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
