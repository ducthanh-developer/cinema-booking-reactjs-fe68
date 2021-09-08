import Header from 'components/Header/Header';
import Home from 'containers/client/Home/Home';

import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />

                    <Route path='*' component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
