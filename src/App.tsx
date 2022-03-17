import { createClient, Provider } from "urql";
import Potato from "./Potato";

const client = createClient({
  url: "https://countries.trevorblades.com/graphql",
});

const App = () => {
  return (
    <Provider value={client}>
      <div className="App">Potato</div>
      <Potato />
    </Provider>
  );
};

export default App;
