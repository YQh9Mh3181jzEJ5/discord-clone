import "./App.scss";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import { useAppSelector } from "./app/hook";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
    });
  }, []);

  return (
    <div className="App">
      {/* {user ? ( */}
      <>
        <Sidebar />
        <Chat />
      </>
      // ) : (
      <Login />)
    </div>
  );
}

export default App;
