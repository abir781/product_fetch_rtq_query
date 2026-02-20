
"use client";
import React from 'react';
import { useDeleteProductMutation, useGetProductsQuery } from './redux_rtk/productapi';
import Link from 'next/link';

const Products = () => {

    const { data, isLoading, error,refetch } = useGetProductsQuery();
    const [deleteProduct]=useDeleteProductMutation();
    const handledelete = async(id)=>{
        await deleteProduct(id);
        refetch();

    }
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
                            <button onClick={()=>handledelete(singlepro.id)}>delete</button>
                           
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Products;