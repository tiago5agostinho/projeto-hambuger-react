import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";



import { Container, ImgFace, ContainerItens, Order } from "./styles";
import Title from "../../components/title";
import Button from "../../components/Button";
import Burger from '../../assets/packageBurger.svg';
import Trash from '../../assets/Trash.svg'
import axios from "axios";




const App = () => {

    const [orders, setOrders] = useState([])
    const history = useHistory()


    useEffect(() =>{

async function fetchOrders(){
    const {data: newOrders} = await axios.get("http://localhost:3001/orders")

    setOrders(newOrders)
}

fetchOrders()
    },[])

  async function deleteOrder(orderId){
      await axios.delete(`http://localhost:3001/orders/${orderId}`)
      const newOrders = orders.filter(order => order.id !== orderId)

      setOrders(newOrders)
  }
  


    function goldbackPage (){

history.push('./')
    }

    return (
    <Container>
        <ImgFace src={Burger} />
        <Title>Pedidos</Title>
        <ContainerItens>
 <div>

 {orders.map(order =>(
     <Order key={order.id}>
      <div>
          {order.income}
          <p>{order.clientName}</p>
      </div>
      <button onClick={() =>deleteOrder(order.id)}><img src={Trash}/> </button>

     </Order>
 ))
 

 }
 
 </div>
            <Button isBack= {true} onClick={goldbackPage} >Voltar</Button>
        </ContainerItens>

    </Container>


    )

}

export default App
