import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Kosar from './Kosar';

function KosarCanvas(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function osszeg() {
    let osszeg = 0;
    props.kosarLista.forEach(kosarbanTermek => {
        let price = parseFloat(kosarbanTermek.price);
        osszeg += price;
    });
    return osszeg;
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        🛒
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='bg-primary text-white'>
          <h3 className='text-center'>Kosar</h3>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-primary text-white'>
            <ListGroup>
                {
                    props.kosarLista.map((kosarbanTermek, index) => {
                        return <Kosar kosarbanTermek={kosarbanTermek} key={kosarbanTermek.id}></Kosar>
                    })
                }
            </ListGroup>
            <div className='mt-3'>
                        <h4 className='text-center'>Osszesen: {osszeg()} </h4>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default KosarCanvas;