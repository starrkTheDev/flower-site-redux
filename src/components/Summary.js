import classes from './Summary.module.css';

const Summary = (props) => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <div className={classes.overlay} />
            <div className={classes.wrapper}>
                <p>Thanks for the purchase </p>
                <p>{props.name} {props.lastName}</p>
                <p>We will send the details to: </p>
                <p>{props.email}</p>
                <button className={classes.refreshButton} onClick={refreshPage}>Back to our products </button>
            </div>
        </>
    )
}

export default Summary;