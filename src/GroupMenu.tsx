import React from 'react';
import logo from './logo.svg';
// import './Menu.css';

class GroupMenu {
    render() {
        return (
            <div className="GroupMenu">
                <header className="GM-header">
                    <img src={logo} className="GM-logo" alt="logo" />
                    <p>
                        Define
                    </p>
                    <a
                        className="GM-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default GroupMenu;
