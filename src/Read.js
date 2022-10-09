import React from 'react'

export default function Read({product, handleDelete}) {
  return (
    <div>
       <tr key={product.id}>
                <td>{product.name} </td>
                <td> {product.price} </td>
                <td>{product.qty} </td>
                <td>{product.category} </td>  
                <td><button onClick={()=>handleDelete(product.id)}>X</button></td>
        
                </tr>
    </div>
  )
}
