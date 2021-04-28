import { Router, Switch, Route} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Catalog from './core/pages/Catalog';
import Home from './core/pages/Home';
import history from './core/utils/history';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog">
                <Catalog />
            </Route>
        </Switch>
    </Router>
);
export default Routes;