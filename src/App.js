import "./styles/main.css"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { BrowserRouter} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop"
import AppRouter from "./components/appRouter/AppRouter";

function App() {


  return (
      <div className="App">
          <BrowserRouter>
              <ScrollToTop />
              <Navbar />
             <AppRouter />
              <Footer />
          </BrowserRouter>

      </div>
  );
}

export default App;
