import PrivateRoute from 'core/components/Routes/PrivateRoute';
import Details from 'core/pages/Catalog/Details';
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
            <PrivateRoute path="/movies/:movieId" allowedRoutes={['ROLE_MEMBER','ROLE_VISITOR']}>
                <Details />
            </PrivateRoute>
            <PrivateRoute path="/movies" allowedRoutes={['ROLE_MEMBER','ROLE_VISITOR']}>
                <Catalog />
            </PrivateRoute>
            
        </Switch>
    </Router>
);
export default Routes;