import React from 'react'

function loading() {
    return (
        <>
            <div className="loading">
                <div class="loader">
                    <div class="load-inner load-one"></div>
                    <div class="load-inner load-two"></div>
                    <div class="load-inner load-three"></div>
                    <span class="text">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default loading