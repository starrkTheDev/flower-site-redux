import classes from './AboutUs.module.css';
import bio1 from '../img/bio1.jpg';
import photo1 from '../img/lewis.jpg';
import photo2 from '../img/george.jpg';
import photo3 from '../img/gina.JPG';
import { useRef } from 'react';

const AboutUs = () => {

    const ref = useRef(null);

    const directHandler = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <div className={classes.wrapper} style={{ backgroundImage: `url(${bio1})` }}>
            <div className={classes.flexdiv1}>
                <p className={classes.phrase}>We are different people with the same goal - to live a stressless life and make others smile</p>
                <button onClick={directHandler} className={classes.direct}>Check our staff</button>
            </div>
        </div>
        <div ref={ref} className={classes.teamdiv} >
            <div className={classes.photoDiv}>
                <p className={classes.name}>Lewis</p>
                <img src={photo1} alt="Lewis" className={classes.photo} />
                <div className={classes.text}>
                    <p className={classes.bio}>"I was working as an automotive engineer for 10 years, made so much money, but I never felt good for myself doing it" </p>
                </div>
            </div>
            <div className={classes.photoDiv}>
                <p className={classes.name}>George</p>
                <img src={photo2} alt="George" className={classes.photo} />
                <div className={classes.text}>
                    <p className={classes.bio}>"I was a software developer for 6 years, but I felt like I need more contact with nature and people in my life" </p>
                </div>
            </div>
            <div className={classes.photoDiv}>
                <p className={classes.name}>Gina</p>
                <img src={photo3} alt="Gina" className={classes.photo} />
                <div className={classes.text}>
                    <p className={classes.bio}>"I worked in the pharmaceutical company for 3 years, but it was too artificial to me, without any touch of nature" </p>
                </div>
            </div>

        </div>
    </>
    )
};

export default AboutUs;