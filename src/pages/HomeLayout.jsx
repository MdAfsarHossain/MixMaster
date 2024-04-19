// import React from 'react';
// import { Link } from 'react-router-dom';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {

    const navigation = useNavigation();
    // console.log(navigation);

    const isPageLoading = navigation.state === 'loading';

    const value = 'some value';

    return (
        <div>
            {/* <nav>Navbar</nav> */}
            <Navbar />
            <section className='page'>
                {isPageLoading ? <div className='loading'/> : <Outlet context={{ value }} />}
                {/* <Outlet /> */}
            </section>

            
            {/* <h2>Home Layout Page</h2> */}
            {/* <Link to='/about'>About</Link> */}
        </div>
    );
};

export default HomeLayout;