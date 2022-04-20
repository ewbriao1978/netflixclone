import React from 'react';
import './Header.css';

export default({black}) => {
    return (

        <header className = {black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">

                    <img src = "https://static.seekingalpha.com/uploads/2015/10/3/36587996-14439190652078466-Michael-Munro_origin.png" alt="Netflix"/>

                </a>

            </div>
            <div className="header--user">
                <a href="/">

                    <img src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = "Usuário" />





                </a>



            </div>



        </header>


    );
}
