import "./App.scss";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* home */}
      <Home />
    </div>
  );
}

export default App;
