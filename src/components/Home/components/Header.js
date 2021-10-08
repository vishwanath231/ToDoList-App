import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const now = new Date()
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    const todayArr = {
        day: week[now.getDay()],
        date: now.toLocaleDateString()
    }

    const history = useHistory();

    const closeFun = () => {
        history.push('/')
    }

    return (
        <>
            <div className="logout">
                <FontAwesomeIcon icon={faPowerOff} className="close" onClick={closeFun} />
            </div>
            <div className="header">
                <p>Hello {localStorage.getItem("reactUser")}</p>
                <div className="today">
                    <div className="day">{ todayArr.day }</div>
                    <div className="date">{ todayArr.date }</div>
                </div>
                <h2>What's the plan for today?</h2>
            </div>
        </>
    )
}

export default Header;
