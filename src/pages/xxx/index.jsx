import SideNavigationBar from "./sideNavigationBar";
import DisplayArea from "./displayArea";
import OperationArea from "./operationArea";
import "./index.css"
import React, { useState } from 'react';
function Console() {
    const [width1, setWidth1] = useState(3000);
    const [width2, setWidth2] = useState(1000);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleDrag = (e) => {
        if (isDragging) {
            const newWidth1 = e.clientX;
            const newWidth2 = window.innerWidth - e.clientX;
            setWidth1(newWidth1);
            setWidth2(newWidth2);
        }
    };
    const handleButtonClick = () => {
        setShowSidebar(!showSidebar);
        console.log(showSidebar)
    }

    return (
        <div id="father" onMouseMove={handleDrag} onMouseUp={handleDragEnd}>
            <SideNavigationBar id="bar" className={showSidebar ? 'collapsed' : ''} sidebarStyle={{ display: showSidebar ? 'flex' : 'none', minWidth: showSidebar ? '20%' : '0' }} />
            <DisplayArea width={width1} showSidebar={showSidebar} toggleSidebar={handleButtonClick} />
            <div
                className="dragbar"
                onMouseDown={handleDragStart}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: isDragging ? 'col-resize' : isHovering ? 'ew-resize' : 'default', height: "100%", width: "1%", display: "flex", backgroundColor: "black" }}
            ></div>
            <OperationArea width={width2} />
        </div>
    );
}
export default Console;
