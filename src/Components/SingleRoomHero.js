import React from 'react';

const ImageHeader = ({ imageUrl, children }) => {
    const headerStyle = {
        backgroundImage: `url(${imageUrl})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "600px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <header style={headerStyle}>
            {children}
        </header>
    );
};

export default ImageHeader;
