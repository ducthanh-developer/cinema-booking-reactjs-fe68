import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import ClientLayout from 'layouts/ClientLayout';
import { adminRoutes, clientRoutes } from 'routes';
import Dashboard from 'containers/admin/Dashboard/Dashboard';
import AddMovie from 'containers/admin/Movies/AddMovie/AddMovie';
import Movies from 'containers/admin/Movies/Movies';
import Showtime from 'containers/admin/Showtimes/Showtime';
import Home from 'containers/client/Home/Home';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { createBrowserHistory } from 'history';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export const history = createBrowserHistory();

function App() {
    const renderRoutes = (routes, Layout) => {
        return routes.map((route, index) => {
            const { path, component, exact } = route;
            return <Layout key={index} path={path} component={component} exact={exact} />;
        });
    };

    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    {renderRoutes(clientRoutes, ClientLayout)}
                    {/* {renderRoutes(adminRoutes, AdminLayout)} */}

                    <AdminLayout path="/admin" exact Component={Dashboard} />
                    <AdminLayout path="/admin/movies" exact Component={Movies} />
                    <AdminLayout path="/admin/movies/add-movie" exact Component={AddMovie} />
                    <AdminLayout path="/admin/users" exact Component={Dashboard} />
                    <AdminLayout path="/admin/showtimes" exact Component={Showtime} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
}
export default App;
