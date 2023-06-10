import React, { useState } from 'react';
import "./displayArea.moudle.css"
function DisplayArea({ width, showSidebar, toggleSidebar }) {

    return (
        <div id="middleChild" style={{ width: `${width}px` }}>
            <button id="button" onClick={toggleSidebar} className={showSidebar ? 'collapsed' : ''}>
                {showSidebar ? '《-' : '-》'}
            </button>
            <div id="html"></div>
        </div>
    );
}

export default DisplayArea;
