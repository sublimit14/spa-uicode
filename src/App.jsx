import '@csstools/normalize.css';
import './fonts/fonts.scss';
import './App.scss';
import './index.scss';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";



const App = () => {
  return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
