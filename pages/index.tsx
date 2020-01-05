import * as React from "react";
import "../style/landing.scss";
import Button from '@material-ui/core/Button';
import Link from "next/link";

function Landing(){

    function goToCorsi() {

    }

    return (
        <div className="landing">
            {/*<Button variant="contained" color="primary" href="/">
                Go to the main page
            </Button>*/}
            <div className="welcome">
                <h1>Benvenuto su Dmi Cloud!</h1>
                <br/>
                <p>Puoi consultare direttamente i corsi<br/>
                    oppure<br/>
                    puoi accedere e contribuire anche tu<br/>
                    alla raccolta!</p>
            </div>
            <div className="actions">
                <Link href="/corsi">
                    <p>Corsi</p>
                </Link>
                <Link href="/login">
                    <p>Accedi</p>
                </Link>
            </div>
        </div>
    );
}

export default Landing;