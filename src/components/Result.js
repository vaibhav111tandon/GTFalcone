import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

import './Result.css'

function Result() {

    const [results, setResults] = useState('');
    const [status, setStatus] = useState('');
    const [failure, setFailure] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() => {
        var url_string = window.location.href;
        var url = new URL(url_string);
        setStatus(url.searchParams.get("status"));
        setResults(url.searchParams.get("planet"));
        setFailure(url.searchParams.get("failure"));
        setErrors(url.searchParams.get("error"));
        
        return () => {
            
        }
    }, [])

    return (
        <div>
            <Header />
            <div className="result">
                {
                    (status === 'success') ? 
                    (<div>
                        <h2>Success! Congratulations on findng Falcone. King Shan is mighty pleased.</h2>
                        <h2>Planet Found: {results}</h2>
                     </div>   
                    ): (failure === 'failure') ?
                    (
                    <div>
                        <h2>Failure! King Shan is not pleased</h2>
                     </div>
                    ):
                    (
                    <div>
                        <h2>Something bad happened! Please retry</h2>
                        <h4>Error: {errors}</h4>
                    </div>    
                    )
                    
                }
            </div>
            <Footer />
        </div>
    )
}

export default Result