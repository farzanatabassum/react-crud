import React from 'react'

export default function Edit({data}) {
  return (
    <div>
                  {data.map((product) => {
        return (
                <tr >
                <td><input type="text" value={product.name} name="name" /></td>
                <td><input type="text" value={product.price} /></td>
                <td><input type="text" value={product.qty} /></td>
                <td><input type="text" value={product.category} /></td>  
                </tr>
        );
      })}
                
    </div>
  )
}
