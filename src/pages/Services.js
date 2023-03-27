import classes from './Services.module.css';
import gardening from '../img/gardening.jpeg';

const Services = () => {
    return (
        <main className={classes.background}
            style={{ backgroundImage: `url(${gardening})` }}>
            <div className={classes.wrapper}>
                <span className={classes.paragraph}>Our services:</span>
                <p>Decorating your wedding - 1000$</p>
                <p>Decorating your gifts with flowers - 50-250$</p>
                <p>Watering your plants when you are on vacation - 10$/day</p>
                <p>Taking care of your garden - 20$/hour</p>
                <p>Preparing flowers for funeral - 200$</p>
                <p>Preparing compositions for special occasions - 100-200$ </p>
            </div>
        </main >
    )
};

export default Services;