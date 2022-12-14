import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section>
            <div>
                <h2>ERROR 404</h2>
                <h5>Oops! We can't find the page. Search Something different.</h5>
                <Link to= "/" >Back to Home</Link>
            </div>
        </section>
    )
}

export default Error;