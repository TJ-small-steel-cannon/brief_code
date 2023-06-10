import React, { useState } from 'react';
import "./operationArea.moudle.css"
function OperationArea({ width }) {
    return (
        <div id="rightChild" style={{ width: `${width}px` }}></div>
    );
}

export default OperationArea;
