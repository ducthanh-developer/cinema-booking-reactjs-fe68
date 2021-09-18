import About from 'containers/client/About/About';
import Checkout from 'containers/client/BookTicket/Checkout/Checkout';
import Home from 'containers/client/Home/Home';
import Login from 'containers/client/User/Login/Login';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import Register from 'containers/client/User/Register/Register';
import Review from 'containers/client/Review/Review';
import SeatPlan from 'containers/client/SeatPlan/SeatPlan';
import Theater from 'containers/client/Theater/Theater';

export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/theater',
        component: Theater,
        exact: false,
    },
    {
        path: '/review',
        component: Review,
        exact: false,
    },
    {
        path: '/about',
        component: About,
        exact: false,
    },
    {
        path: '/movie-detail/:movieId',
        component: MovieDetail,
        exact: false,
    },
    {
        path: '/seat-plan/:id',
        component: SeatPlan,
        exact: false,
    },
];

export const ticketRoutes = [
    {
        path: '/checkout/:id',
        component: Checkout,
        exact: true,
    },
]

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
]

export const adminRoutes = [];
