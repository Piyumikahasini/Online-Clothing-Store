import React from 'react';
import POPULAR from '../assets/popular'
import Item from './Item';

function PopularProducts() {
  return (
    <section>

    {/* title */}

      <div>
        <h3>Popular Products</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. perferendis cupiditate nisi commodi 
          provident veritatis! Cumque illo incidunt quas odit. Ab, maxime.</p>
      </div>

      {/* container */}

      <div>
        {POPULAR.map((item)=> {
          <Item key={item.id} id={item.id} name={item.name} image={item.image}
          new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>

    </section>
  );
}

export default PopularProducts;
