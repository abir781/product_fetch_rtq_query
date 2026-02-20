
"use client";
import React from 'react';
import { useGetProductsQuery } from './redux_rtk/productapi';
import Link from 'next/link';

const Products = () => {

    const { data, isLoading, error } = useGetProductsQuery();
    if(isLoading){
        <p>it's working like cristiano</p>
    }
    if(error){
        <p>jjjjj</p>
    }
    return (
        <div>
            {
                data?.map((singlepro,index)=>{
                    return(
                        <div key={index}>
                            <Link href={`/${singlepro.id}`}>

                                <p>{singlepro.title}</p>
                            </Link>
                           
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Products;