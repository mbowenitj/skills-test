
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Gallery from "./components/gallery";
import Tabs from "./components/tabs";
import Footer from "./components/footer";
import "./styles.scss";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
			<Navbar />
      <Gallery />
      <Tabs/>
			<Routes>
				<Route path='/history' element={<Gallery />} />
        <Route path='/team' element={<Tabs />} />
			</Routes>
			<Footer />
		</BrowserRouter>
  </div>
  );
}

export default App;
