import React from 'react';
import "./Legend.scss";

const Legend = () => {
    return (
        <div id='mainText'>
            <ul>
                <li>
                    <div className='start'></div>
                    Start Node
                </li>
                <li>
                    <div className='target'></div>
                    Target Node
                </li>
                <li>
                    <div className='unvisited'></div>
                    Unvisited Node
                </li>
                <li>
                    <div className='visited'></div><div class="visitedobject"></div>
                    Visited Node
                </li>
                <li>
                    <div className='shortest-path'></div>
                    Shortest Path
                </li>
                <li>
                    <div className='wall'></div>
                    Wall Node
                </li>
            </ul> 
        </div>
    )
}
 
export default Legend;