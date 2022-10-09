// import {    useState } from 'react';

// const Home = () => {
//   const [data, setData] = useState([
//     {
//       name: 'Football',
//       price: 49.99,
//       qty: 12,
//       category: 'Sporting Goods',
//       id: 1,
//     },
//     {
//       name: 'Baseball',
//       price: 9.99,
//       qty: 6,
//       category: 'Sporting Goods',
//       id: 2,
//     },
//     {
//       name: 'Basketball',
//       price: 29.99,
//       qty: 13,
//       category: 'Sporting Goods',
//       id: 3,
//     },
//     {
//       name: 'iPod Touch',
//       price: 99.99,
//       qty: 12,
//       category: 'Electronics',
//       id: 4,
//     },
//     {
//       name: 'iPhone 5',
//       price: 389.99,
//       qty: 16,
//       category: 'Electronics',
//       id: 5,
//     },
//     {
//       name: 'Nexus 7',
//       price: 249.99,
//       qty: 10,
//       category: 'Electronics',
//       id: 6,
//     },
//   ]);
//   const [displayForm, setDisplayForm] = useState(false);
//   const [adddata, setAddFormData] = useState( {
//     name: "",
//     price: "",
//     qty: "",
//     category: "",
//   });
 
  
 
// //  const [searchWord,setSearchword]=useState('')
//   const handleDelete=(id)=>{
//     const newData=data.filter((product)=>product.id!==id)
//     setData(newData)
//   }
  
 
//   const handleOnChange = e => {

//     setAddFormData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
   
  
     
//   };
//   const createPerson = (id) => {
     
// if(id!==data.length){
//   setDisplayForm(true)
// }
// setData(...data,...adddata)
     
//       // setAddFormData({name: "",
//       // price: "",
//       // qty: "",
//       // category: "",});
//         // setDisplayForm(true);

//       // setAddFormData({
//       //       ...adddata,
//       //       [e.target.name]: e.target.value
//       //     });
//     //   // setDisplayForm(false);
  
//      };
  
//   return (
//     <div>
//      {/* <input type="text" placeholder='Enter product name'  onChange={(e)=>setSearchword(e.target.value)} /> */}
    
//         <table className='tb-border'>
//             <thead >
//         <tr >
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Category</th>
//               </tr>
//               </thead>
//               <tbody>
      
      
//       {/* {data.filter((product) => {
      
//       if(searchWord===''){
//         return product
//       }
//       else if(product.name.includes(searchWord)){
//         return product
//       }

//    }) */}
//    {displayForm?(
//   <div key={data.id}>
// <input
// placeholder="Name"
// value={adddata.name}
// onChange={handleOnChange}


// name="name"
// />
// <input
// placeholder="Price"
// value={adddata.price}
// onChange={handleOnChange}
  
// name="price"
// />
// <input type="text"  placeholder="Quantity"         
// onChange={handleOnChange} 

// value={adddata.qty} name='qty' />
// <input type="text" value={adddata.category}  name='category'       

// onChange={handleOnChange}
// placeholder='Category'/>
//     </div> ):(
//    {data.map((product) => {
//         return (
//                 <tr >
//                 <td><input type="text" value={product.name} name="name" /></td>
//                 <td><input type="text" value={product.price} name='price'  /></td>
//                 <td><input type="text" value={product.qty} name='qty' /></td>
//                 <td><input type="text" value={product.category}  name='category'/></td>  
//                 <td><button onClick={()=>handleDelete(product.id)}>X</button></td>
//                 </tr>
//         );

//       })})}
//                       </tbody>

// </table>





        
 
//         <button onClick= {()=>createPerson(data.id)}>Add</button>  



//     </div>
//   );
// };

// export default Home;
