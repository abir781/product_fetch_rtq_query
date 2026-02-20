import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// export const productapi = createApi({
//     reducerPath:"productapi",
//     baseQuery: fetchBaseQuery({baseUrl: "/"}),
//     endpoints: (builder)=>({
//         getproducts: builder.query({
//             query: () =>"product.json",
//         }),
//     }),
// });

// export const { useGetproductsQuery } = productapi;

// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) =>({
        getProducts: builder.query({
            query:()=>'products',
        }),
         getProductById: builder.query({
        query: (id) => `products/${id}`,  // single product
    }),
        
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
