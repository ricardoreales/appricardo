
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const suma = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const resta = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div align="center">          
           <table >
               <tbody>
                   <tr>
                       <td align="left"><button className="Option" onClick={resta}>-</button></td>
                       <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                       <td align="right"><button className="Option" onClick={suma}>+</button></td>
                   </tr>
                   <tr>
                       <td align="center" colSpan="5"><button className="Option" onClick={() => onAdd(quantity)}>Agregar al carrito</button></td>
                   </tr>
               </tbody>
           </table>       
       </div>
   )

}
export default ItemCount