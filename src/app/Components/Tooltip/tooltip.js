// components/Tooltip.js
import React from 'react';

// Accept props in the component function
const Tooltip = ({ text, top, left }) => {
    // Set dynamic inline styles based on the passed props
    const tooltipStyles = {
        top: `${top}%`, // Convert numbers to percentage strings
        left: `${left}%`,
    };

    return (
        <div style={tooltipStyles} className="tooltip">
            <p>{text}</p>
        </div>
    );
};

// Provide default props if they aren't provided by the parent component
Tooltip.defaultProps = {
    text: "Default Tooltip Text",
    top: 20, // Default to 20% if not provided
    left: 20, // Default to 20% if not provided
};

export default Tooltip;