import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home.js'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import {CartProvider} from './context/cartContext'
import './App.scss'




function App() {
  return (
    <CartProvider>
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
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
