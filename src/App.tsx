import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (items: string) => {
    console.log(items);
  };
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        OnSelectItem={handleSelectItem}
      />
    </div>

    //   <div>
    //     <Alert>
    //       Hello <span>Wolrd</span>
    //     </Alert>
    //   </div>
  );
}
export default App;
