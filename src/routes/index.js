import Checkout from 'containers/client/BookTicket/Checkout/Checkout';
import Home from 'containers/client/Home/Home';
import Login from 'containers/client/User/Login/Login';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import Register from 'containers/client/User/Register/Register';
import Profile from 'containers/client/User/Profile/Profile';

export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/movie-detail/:movieId',
        component: MovieDetail,
        exact: false,
    },
    {
        path: '/profile',
        component: Profile,
        exact: false,
    },

];

export const ticketRoutes = [
    {
        path: '/checkout/:id',
        component: Checkout,
        exact: true,
    },
];

export const userRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    },
];

//export const adminUserRoutes = [
//    {
//        path: '/login',
//        component: Login,
//        exact: true,
//    },
//];
//export const adminMovieRoutes = [];
//export const adminShowtimeRoutes = [];
