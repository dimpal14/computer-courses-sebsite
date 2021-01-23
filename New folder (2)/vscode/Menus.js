import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action color="success" >Home</Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/View-course" action color="danger" >View courses</Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/Add-course" action color="primary">Add courses</Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/About" action color="danger">About</Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/Contact" action color="primary">Contact us</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Hire" action color="danger">Hire with us</Link>
        </ListGroup>

    )
}
export default Menus;