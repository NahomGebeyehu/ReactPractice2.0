import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <Main></Main>
      {showModel && <SideBar setShowModel={setShowModel} />}
      <Footer setShowModel={setShowModel}></Footer>
    </>
  );
}

export default App;
