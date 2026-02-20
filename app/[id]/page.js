"use client";
import React, { useEffect, useState } from 'react';
import Pro from './Pro';
import { useAddProductMutation } from '../redux_rtk/productapi';

const singleproductpage = () => {

    const [romario,setromario]=useState(null);
    const [newprice,setnewprice]=useState(0);

    const [addProduct] = useAddProductMutation();


    useEffect(()=>{

        setnewprice(romario+newprice);
        

    },[romario])

      const handleSubmit = async () => {
    if (newprice > 0) {
      try {
        await addProduct({
          title: "Total Price",
          newprice: newprice, // <-- here we add newprice property
        });
        alert("Posted successfully!");
        setNewPrice(0);
      } catch (err) {
        console.error("Error posting:", err);
      }
    }
  };
    return (
        <div>
      <Pro setromario={setromario}></Pro>

      {
        newprice>0 ? <p>{newprice}</p> :<p>no data added</p>
      }

        <button onClick={handleSubmit} >
       working
      </button>

    
            
            
        </div>
    );
};

export default singleproductpage;