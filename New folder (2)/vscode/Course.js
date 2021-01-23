import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from "axios"
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const  Course=({ course,update })=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("deleted")
                update(id)
            },
            (error)=>{

                toast.error("not deleted")
            }
        );
    };
return(
    <div>
    <card>
        <CardBody className="text-center">
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.Description}</CardText>
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}
                >Delete</Button>
                <Button color="warning ml-3">Update</Button>
            
        </CardBody>
    </card>
    </div>
);
}
export default Course;