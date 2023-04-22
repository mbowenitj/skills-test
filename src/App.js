
import { BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
			<Navbar />
			<Footer />
		</BrowserRouter>
  </div>
  );
}

export default App;
