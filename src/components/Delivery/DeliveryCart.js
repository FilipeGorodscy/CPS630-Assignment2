import React from 'react';

const DeliveryCart = (props) => {

     const drop = e =>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        console.log(card_id);
        const card = document.getElementById(card_id);
        card.style.display = 'block';

        //e.target.appendChild(card);
        e.target.insertAdjacentHTML('beforeend',('<p>$9.99</p>'));
    }



    const dragOver = e => {
        e.preventDefault();

    }

    
    return (
        <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver} style={{height: "600px"}}>
            {props.children}
        </div>
    );
}

export default DeliveryCart;