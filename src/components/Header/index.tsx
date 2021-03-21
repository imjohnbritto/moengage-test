import React from 'react';
import DownloadFile from '../../assets/DownloadFile';
import './header.scss';

function Header() {
    return (
        <div className="Header-wrapper">
            <h1 className="Header-text">ABC College of engineering</h1>
            <DownloadFile />
        </div>
    );
}

export default Header;