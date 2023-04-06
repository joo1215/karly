import { TopBanner } from "./components/TopBanner/TopBanner";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Search } from "./components/Search/Search";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <TopBanner />
      <Login />
      <Search />
      <Nav />
      <Header />
    </>
  );
}

export default App;
