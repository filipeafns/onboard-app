import React from 'react';
import Link from 'next/link';

// Define the functional or class-based component
const Navigation = () => {
    return (
        <ul className="navigation">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="01-workflow-builder/step1">Getting Started</Link>
            </li>
            <li>
                <Link href="#">Authentication</Link>
            </li>
            <li>
                <Link href="#">Building Workflows</Link>
            </li>
            <li>
                <Link href="#">Alloy Modal</Link>
            </li>
        </ul>
    );
};

// Export the component as the default export
export default Navigation;
