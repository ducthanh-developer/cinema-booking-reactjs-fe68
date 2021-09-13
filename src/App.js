import Dashboard from 'containers/admin/Dashboard/Dashboard';
import Films from 'containers/admin/Films/Films';
import Showtime from 'containers/admin/Showtimes/Showtime';
import Home from 'containers/client/Home/Home';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { createBrowserHistory } from 'history';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export const history = createBrowserHistory();

function App() {
    return (
        <div className='App'>
            <Router history={history}>
                <Switch>
                    <Route path='/' exact Component={Home} />

                    <AdminLayout path='/admin' exact Component={Dashboard} />
                    <AdminLayout path='/admin/films' exact Component={Films} />
                    <AdminLayout
                        path='/admin/users'
                        exact
                        Component={Dashboard}
                    />
                    <AdminLayout
                        path='/admin/showtimes'
                        exact
                        Component={Showtime}
                    />

                    <Route path='*' Component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
