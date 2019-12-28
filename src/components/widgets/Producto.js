import React from 'react';

const Producto = ( { producto }) => {

    return (


        <div className="card mt-4" style={{width: '18rem'}}>
            <h5 className="mt-1 ml-1" >{producto.name}</h5>
            <img src={producto.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{producto.description}</p>
                <span>${producto.cost}</span>
                <div className="float-right">
                    <button type="button" className="btn btn-info">Buy</button>
                </div>
            </div>
        </div>
        
    );
};

export default Producto;