import React, { Component } from 'react'

const NavBar = ({totalCounters}) => {
    return (
        <nav class="navbar navbar-light bg-light">  
            <a class="navbar-brand" href="#">Cart<span className ="badge bg-pill bg-secondary">
                {totalCounters}
                </span> 
            </a>
        </nav>
    );
};
 
export default NavBar;