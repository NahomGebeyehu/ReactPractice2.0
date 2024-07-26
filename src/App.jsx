import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleToggleModal() {
    setShowModel(!showModel);
  }
  useEffect(() => {
    async function fetchAPIData() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localkey = `NASA-${today}`;
      if (localStorage.getItem(localkey)) {
        const apiData = JSON.parse(localStorage.getItem(localkey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localkey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data}></Main>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal}></Footer>
      )}
    </>
  );
}

export default App;
