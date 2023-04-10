import React from 'react';
import './ProfilePage.css';
import Assassin from '../img/assassin.jpg';

function ProfilePage() {
  return (
    <div className='profile-container'>
      <div className='profile-box'>
        <h1>UserId</h1>
        <p>UserEmail</p>
        <tr className='table'>
            <td>GameId</td>
            <td>GameName</td>
            <td>GamePrice</td>
        </tr>
      </div>
    </div>
  );
}

export default ProfilePage;