import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home.js'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer'
import {Comprar} from './components/Comprar/Comprar'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:id">
            <ItemListContainer />
        </Route>
        <Route path="/item/:id">
            <ItemDetailContainer />
        </Route>
        <Route path="/cart">
            <Comprar/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
