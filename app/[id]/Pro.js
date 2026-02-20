"use client";
import React, { useState } from 'react';
import { useGetProductByIdQuery } from '../redux_rtk/productapi';
import { useParams } from 'next/navigation';
import Cafedrinko from './Cafedrinko';

const Pro = ({setromario}) => {
    
     const params = useParams();
     const {id} = params;
     console.log(id);
   const { data, isLoading, error } = useGetProductByIdQuery(id);

   const clearcafe = (prc) =>{
    console.log(prc);
    setromario(prc+20)
   }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching product</div>;

    return (
        <div>
            <h2>{data.title}</h2>
            <p>Price: ${data.price}</p>
            <p>In stock: {data.inStock ? 'Yes' : 'No'}</p>
            <button onClick={()=>clearcafe(data.price)}>add price</button>

            

        </div>
    );
};

export default Pro;