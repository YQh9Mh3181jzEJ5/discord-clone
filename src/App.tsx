import "./App.scss";
import Chat from "./components/home/Chat";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
