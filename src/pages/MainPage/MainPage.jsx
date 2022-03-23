import React from 'react';
import axios from 'axios';

const MainPage = () => {

    // axios.post('http://localhost:1337/api/auth/local', {
    //     "identifier": "bagration1998@gmail.com",
    //     "password": "Bagration6915831"
    // }).then(response => {
    //     console.log('Your user received an email');
    // })
    //     .catch(error => {
    //         console.log('An error occurred:', error.response);
    // });

    axios
        .post('http://localhost:1337/api/auth/local/register/', {
            username: 'Strapi user',
            email: 'user@strapi.io',
            password: 'strapiPassword',
        })
        .then(response => {
            // Handle success.
            console.log(response);
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });

    return (
        <div>
            MainPage
        </div>
    );
};

export default MainPage;