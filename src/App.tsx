import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let daftpunk = [
    "I hate the hate",
    "Thats just me i guess",
    "Everything with me is blessed",
    "Cease and Decist",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button onClick={() => {}}>Botton</Button>
    </div>
  );
}

export default App;
