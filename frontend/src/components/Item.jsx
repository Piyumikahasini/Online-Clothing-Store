import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    < Link to={''}>
      <div>
        <img src={image} alt='' height={211} width={211} className=''/>
      </div>
      <div>
        <h4>{name}</h4>

          {/* methana iwara kalee ===================================================== */}


        </div>
    </Link>
  )
}

export default Item
