import React from 'react';
import './ShopPage.css';
import Farcry from '../img/farcry.jpg';

function ShopPage() {
  return (
    <div className='shop-container'>
      <div className='shop-box'>
        <h1>Shop</h1>
        <tr className='table'>
            <td>GameId</td>
            <td>GameName</td>
            <td>GamePrice</td>
        </tr>
      </div>
    </div>
  );
}

export default ShopPage;