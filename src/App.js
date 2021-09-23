import Dashboard from 'containers/admin/Dashboard/Dashboard';
import AddMovie from 'containers/admin/Movies/AddMovie/AddMovie';
import Movies from 'containers/admin/Movies/Movies';
import Showtime from 'containers/admin/Showtimes/Showtime';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { createBrowserHistory } from 'history';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { clientRoutes, ticketRoutes, userRoutes } from 'routes';
import { Suspense, lazy } from 'react';
import './App.css';
import Loading from 'components/Loading/Loading';

const BookTicketLayoutLazy = lazy(() => import('layouts/BookTicketLayout'));
const ClientLayoutLazy = lazy(() => import('layouts/ClientLayout'));
const UserLayoutLazy = lazy(() => import('layouts/UserLayout'));

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
                <Loading />
                <Switch>
                    <Suspense fallback={<Loading />}>
                        {renderRoutes(clientRoutes, ClientLayoutLazy)}
                        {renderRoutes(ticketRoutes, BookTicketLayoutLazy)}
                        {renderRoutes(userRoutes, UserLayoutLazy)}
                    </Suspense>
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
