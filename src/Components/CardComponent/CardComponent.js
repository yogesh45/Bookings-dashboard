import React from "react";
import './CardComponent.scss';

const CardComponent = ({cardData}) => {
    return(
        <div className='card-component'>
            <div className='card-title'>
               {cardData.title}
            </div>
            <div className='card-value' style={{color : cardData.color ? cardData.color : '#11141a'}}>
                {cardData.value}
                {
                    cardData.img ? <img className='card-img' src={cardData.img} alt={cardData.value} /> : ''
                }
            </div>
        </div>
    )
}

export default CardComponent;