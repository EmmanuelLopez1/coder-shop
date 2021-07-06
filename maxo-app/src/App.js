import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home.js'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer'
import { Page } from './pages/page'


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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
