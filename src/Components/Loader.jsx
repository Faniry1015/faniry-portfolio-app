import React from 'react';
import '../Styles/Loader.css'

function Loader() {
    return <div className="loader-wrapper">
        <div className="loader">
            <div className="roller"></div>
            <div className="roller"></div>
        </div>

        <div id="loader2" className="loader">
            <div className="roller"></div>
            <div className="roller"></div>
        </div>

        <div id="loader3" className="loader">
            <div className="roller"></div>
            <div className="roller"></div>
        </div>
    </div>
}


export default Loader;