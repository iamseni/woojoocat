import { createBrowserRouter} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Layout from '../layout/layout';

const router = createBrowserRouter(
    [
        {
            path: '/layout1',//라우팅 할 path url
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'about',
                    element: <About />
                },
            ],
        },
    ]);

export default router;    