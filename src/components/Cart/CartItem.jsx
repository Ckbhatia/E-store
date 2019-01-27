import React from 'react';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const { incrementItem, decrementItem, removeItem } = value; 

    return ( 
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-12">
                <img className="img-fluid" src={img} alt="product" style={{width:"5rem",height:"5rem"}} />
            </div>
            <div className="col-10 mx-auto col-lg-12">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-12">
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=> decrementItem(id)}> - </span>
                    <span className="btn btn-black mx-1"> {count}</span>
                    <span className="btn btn-black mx-1" onClick={()=> incrementItem(id)}> + </span>
                </div>    
            </div>
            {/**/}
            <div className="col-10 mx-auto col-lg-12">
                <div className="cart-icon" onClick={()=> removeItem(id)}>
                    <i className="fas fa-trash" ></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-12">
                <strong> total item: ₹{total}</strong>
                {price}
            </div>
        </div>
    )
}