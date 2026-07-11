import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1>우주냥보내기</h1>
            <Outlet/>
                <h1>Bottom</h1>
            
        </div>
    );
};

export default Layout;