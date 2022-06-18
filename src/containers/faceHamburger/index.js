import React, {useState, useRef} from "react";
import { useHistory } from "react-router-dom";


import { Container, ImgFace, ContainerItens, InputLabel, Input} from "./styles";
import  Title  from "../../components/title";
import Button from "../../components/Button";
import Burger from '../../assets/burger.png';
import Axios from "axios";


const App = () => {

    const [orders, setOrders] = useState([])
    const inputRequest = useRef()
    const inputName = useRef()
    const history = useHistory()

async function addNewClient () {

const {data:newOrders} = await Axios.post("http://localhost:3001/orders",{
income: inputRequest.current.value,
clientName: inputName.current.value
})

setOrders([... orders, newOrders])

history.push("/Pedidos")

}



    return (<Container>
        <ImgFace src={Burger}/>
        <Title>Faça seu pedido!</Title>
        <ContainerItens>
            <InputLabel>Pedido</InputLabel>
            <Input ref={inputRequest}/>
            <InputLabel>Nome do cliente</InputLabel>
            <Input ref={inputName}/>
            
            <Button onClick={addNewClient }>Novo pedido</Button>
        </ContainerItens>

    </Container>
        
        
        )
    
}

export default App
