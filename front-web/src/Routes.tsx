import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Catalog from './core/pages/Catalog';
import Home from './core/pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog">
                <Catalog />
            </Route>
        </Switch>
    </BrowserRouter>
);
export default Routes;