//1. Import Area
// import React from 'react'

import Link from "next/link";
import React from "react";


//2. Defination Area
function LeflAside() {
    return (
        <React.Fragment>
            <aside className="col-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" href="/City">The City</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/Flight">The Flight</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/Island">The Island</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/Food">The Food</Link>
                    </li>
                </ul>  
            </aside>
        </React.Fragment>
    )
}


//3 . Export Area
// default export area
export default LeflAside;
