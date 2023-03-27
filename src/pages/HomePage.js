import { NavLink } from 'react-router-dom';
import flowers1 from '../img/flowers1.jpg';
import flowers2 from '../img/flowers2.jpg';
import flowers3 from '../img/flowers3.jpg';
import classes from './HomePage.module.css';

const HomePage = () => {
    return (
        <main className={classes.wrapper}>
            <div className={classes.home_main} style={{ backgroundImage: `url(${flowers1})` }}>
                <div className={classes.flexdiv1}>
                    <p className={classes.phrase}>Feel the blossom</p>
                    <button className={classes.direct}><NavLink className={classes.link} to='/products'>Buy now</NavLink></button>
                </div>
            </div>
            <div className={classes.home_second} style={{ backgroundImage: `url(${flowers2})` }} >
                <div className={classes.flexdiv2}>
                    <p className={classes.second_phrase}>Flowers can tell beautiful story ... and so do we</p>
                    <button className={classes.direct_second}><NavLink className={classes.link} to='/bio'>Read our bio</NavLink></button>
                </div>
            </div>
            <div className={classes.home_third} style={{ backgroundImage: `url(${flowers3})` }}>
                <div className={classes.flexdiv3}>
                    <p className={classes.third_phrase}>We make your life simple</p>
                    <button className={classes.direct_third}><NavLink className={classes.link} to='/services'>Our services</NavLink></button>
                </div>
            </div>
        </main>
    )

}

export default HomePage;