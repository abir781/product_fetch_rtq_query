"use client";
import React from 'react';
import { useGetProductByIdQuery } from '../redux_rtk/productapi';
import { useParams } from 'next/navigation';

const Pro = () => {
     const params = useParams();
     const {id} = params;
     console.log(id);
   const { data, isLoading, error } = useGetProductByIdQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching product</div>;

    return (
        <div>
            <h2>{data.title}</h2>
            <p>Price: ${data.price}</p>
            <p>In stock: {data.inStock ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default Pro;