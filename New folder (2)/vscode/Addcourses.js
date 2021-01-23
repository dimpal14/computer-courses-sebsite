import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Allcourse from "./Allcourses";
import axios from "axios";
import base_url from'./../api/bootapi';
import { Fragment } from 'react';
import { toast } from 'react-toastify';





const Addcourse=()=>{
    useEffect(()=>{
        document.title="Add Courses";
    },[]);
//const [course,setCourse]=useState({});



    const [course,setCourse]=useState({});
    const handleForm=(e)=>{
        console.log(course);

     postDatatoServer(course);


        e.preventDefault();


    };
   const postDatatoServer=(data)=>{
       axios.post(`${base_url}/courses`,data).then(
           (response)=>{
           console.log(response);
            console.log("success");
            toast.success("course added successfully");
            setCourse({id:"",title: "",description:""})
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error ! something went wrong");

           }
       );

    };
 


    return (
    <Fragment>
        <h1 className="text-center my-3">Fill course details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">course Id</label>
                <Input 
                type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>{
                    setCourse({...course,id:e.target.value});
                }
                } />
            </FormGroup>
        
        <FormGroup>
            <label for="title">Course title</label>
            <Input
             type="text" placeholder="enter title here" name="title" id="title" onChange={(e)=>{
                setCourse({...course,title: e.target.value});
            }
            } />
        </FormGroup>
        <FormGroup>
            <label for="description"> Course Description</label>
            <Input 
            type="textarea" placeholder="enter description here" name="description" id="description"  style={{height:100}} 
            onChange={(e)=>{
                setCourse({...course,description:e.target.value});
            }}      />
        </FormGroup>
        <Container className="text-center">
            <Button  type="submit"color="primary"> Add Course</Button>
            <Button type="reset" onClick={()=>{
                setCourse({id:"",title: "",description:""})
            }} color="warning ml-3" >
              clear 
            </Button>
        </Container>
        </Form>
        </Fragment>
    
    );
};
export default Addcourse;