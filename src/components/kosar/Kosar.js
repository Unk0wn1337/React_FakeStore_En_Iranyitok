import React from 'react'
import { ListGroup } from 'react-bootstrap'

export function Kosar(props) {
  console.log(props.kosarbanTermek.termek.id);
  return (
    <ListGroup.Item>{props.kosarbanTermek.termek.name} {props.kosarbanTermek.termek.price}$</ListGroup.Item>
  )
}

export default Kosar