import Routes from "./Routes";
import "./styles/global.js";
import { Toaster } from "react-hot-toast";
import { StateContext } from "./context/StateContext";

export default function App() {
  return (
    <StateContext>
      <div className="App">
        <Toaster />
        <Routes />
      </div>
    </StateContext>
  );
}
