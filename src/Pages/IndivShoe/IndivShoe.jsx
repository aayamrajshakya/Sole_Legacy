// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6

import React from 'react'
import "./IndivShoe.css"
import { showcase, women, men } from "../../shoeInventory"
import { useParams } from 'react-router-dom'

export const IndivShoe = () => {
    const { url } = useParams();
    let allShoes = [...women,...men]
  return (
    <div className="main_div">
        {allShoes.filter(shoe => shoe.url === url).map((shoe, index) =>(
            <div key={index} className="indivShoePage">
                <div className="indivShoe_img">
                <img src = {shoe.image} />
                </div>
            <div className="indivShoe_info">
                {/* The new edition shoe in showcase will get an additional component: old price */}
                {/* https://codesource.io/blog/how-to-use-ternary-operator-in-react/ */}
                {/* here, I choose its url as a unique identifier */}
                
                <h3>{shoe.name} <div className="special_offer">{shoe.url=="Nike_Air_Jordan_1" ? "Old price: $179" : ""}<div className="price">${shoe.price} </div>
                </div>
                </h3>
                <h3>Description <div className="description">{shoe.description}</div></h3>
            </div>
            </div>
        ))}
    </div>
  )
}
