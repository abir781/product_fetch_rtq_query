import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



// // export const productapi = createApi({
// //     reducerPath:"productapi",
// //     baseQuery: fetchBaseQuery({baseUrl: "/"}),
// //     endpoints: (builder)=>({
// //         getproducts: builder.query({
// //             query: () =>"product.json",
// //         }),
// //     }),
// // });

// // export const { useGetproductsQuery } = productapi;

// // import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



// export const productApi = createApi({
//     reducerPath: "productApi",
//     baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
//      tagTypes: ["Products"],
//     endpoints: (builder) =>({
//         getProducts: builder.query({
//             query:()=>'products',
//              providesTags: ["Products"],
            
//         }),
//          getProductById: builder.query({
//         query: (id) => `products/${id}`,  // single product
//     }),

    



  
        
//     }),
// });

// export const { useGetProductsQuery, useGetProductByIdQuery, useDeleteProductMutation } = productApi;


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes: ["Products"],
    endpoints: (builder) =>({
        getProducts: builder.query({
            query:()=>'products',
            providesTags: ["Products"],
        }),
         getProductById: builder.query({
        query: (id) => `products/${id}`,  // single product
    }),

          deleteProduct: builder.mutation({
    query: (id) => ({
      url: `products/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Products"], // cache refresh
  }),

      addProduct: builder.mutation({
      query: (newprice) => ({
        url: 'products',
        method: 'POST',
        body: newprice,
      }),
      invalidatesTags: ["Products"], // auto refresh getProducts query
    }),
        
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useDeleteProductMutation, useAddProductMutation } = productApi;





