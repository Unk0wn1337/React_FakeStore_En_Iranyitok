import React, { useContext } from 'react'
import { Button, Card } from "react-bootstrap";
import { KosarContext } from '../context/KosarContext';


function Termek(props) {
    const {kosarbaKattintas} = useContext(KosarContext);

    function kosarbaHelyezes(){
        kosarbaKattintas(props)
    }

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.termek.photo_url} alt='Product image'/>
          <Card.Body>
            <Card.Title>{props.termek.name}</Card.Title>
            <Card.Text>
                {props.termek.description}
            </Card.Text>
            <Card.Text>
                {props.termek.price}$
            </Card.Text>
            <Button variant="primary" onClick={()=>{kosarbaHelyezes()}}>Kosar</Button>
          </Card.Body>
        </Card>
      );
    }
    

export default Termek