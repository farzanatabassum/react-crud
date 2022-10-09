import { useState,useRef } from 'react'

const Home1 = () => {
    const [data, setData] = useState([
        {
          name: 'Football',
          price: 49.99,
          qty: 12,
          category: 'Sporting Goods',
          id: 1,
        },
        {
          name: 'Baseball',
          price: 9.99,
          qty: 6,
          category: 'Sporting Goods',
          id: 2,
        },
        {
          name: 'Basketball',
          price: 29.99,
          qty: 13,
          category: 'Sporting Goods',
          id: 3,
        },
        {
          name: 'iPod Touch',
          price: 99.99,
          qty: 12,
          category: 'Electronics',
          id: 4,
        },
        {
          name: 'iPhone 5',
          price: 389.99,
          qty: 16,
          category: 'Electronics',
          id: 5,
        },
        {
          name: 'Nexus 7',editable:true,
          price: 249.99,
          qty: 10,
          category: 'Electronics',
          id: 6,
        },
      ]);
      const [isAdd,setAdd]=useState(false)
      const [searchWord,setSearchword]=useState('')
      const input=useRef(null)
      const handleOnChange = e => {

        setAddFormData({ ...adddata,
          [e.target.name]: e.target.value
       });

    }
      const addTableRows = ()=>{
       
        setData([...data, { id: data.length + 1, ...adddata }]);

        setAddFormData({ name: "",
        price: "",
       qty: "",
        category: "", });
       setAdd(false)
     
    }
   
    
    const [adddata, setAddFormData] = useState( {
           name: "",
             price: "",
            qty: "",
             category: "",
          });     
         
              

  const handleDelete=(id)=>{
     const newData=data.filter((product)=>product.id!==id)
        setData(newData)
       }
      
       const handleCancel=()=>{
        input.current.value=''
        setSearchword(input.current.value)
        
       }
      

  return (
    <div>
         <input type="text" placeholder='Enter product name' ref={input}  onChange={(e)=>setSearchword(e.target.value)} /> 
         {searchWord&& <button  onClick={handleCancel}>x</button>}

        <table className='tb-border'>
           <thead >
        <tr >
                <th>Name</th>
              <th>Price</th>
               <th>Quantity</th>
                <th>Category</th>
              </tr>
              </thead>
            
               <tbody>
               {data.filter((product) => {
      
           if(searchWord===''){
              return product
            }
            else if(product.name.includes(searchWord)){
             return product
            }
         }) 
                .map(product=>{
                    return(
                                    <tr key={product.id}>

                                <td><input type="text" value={product.name} name="name"    /></td>
                                <td><input type="text" value={product.price} name='price' contenteditable="true" /></td>
                                <td><input type="text" value={product.qty} name='qty'contenteditable="true" /></td>
                                <td><input type="text" value={product.category}  name='category'contenteditable="true"/></td>  
                                 <td><button onClick={()=>handleDelete(product.id)}>X</button></td> 
                                 {/* <td><button>Edit</button></td> */}
                                            </tr>

                        )
                })}


               </tbody>
      </table>
    {isAdd &&
  <div >
<input
placeholder="Name"
value={adddata.name}
onChange={handleOnChange}


name="name"
/>
<input
placeholder="Price"
value={adddata.price}
onChange={handleOnChange}
  
name="price"
/>
<input type="text"  placeholder="Quantity"         
onChange={handleOnChange} 

value={adddata.qty} name='qty' />
<input type="text" value={adddata.category}  name='category'       

onChange={handleOnChange}
placeholder='Category'/>

<button onClick={addTableRows}>save</button>
    </div> 
    }
      <button onClick={()=>setAdd(!isAdd)}>Add</button>
     
    </div>
  )
}

export default Home1
