import React from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null){
            //console.log('Hello');
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
    }

    function RenderCommments({dish}) {
        if(dish!=null){
            if(dish.comments!=null){
                const data=dish.comments.map((commentz)=>{
                    return(
                    
                <div className="col-12">
                <li>{commentz.comment}</li>
                <li>--{commentz.author},{commentz.date}</li>
                </div>
                )});
                //const heading=<div><h4>Comment</h4></div>
                return(
                    <div>
                        <h4>Comments</h4>
                        { data }
                    </div>
                    );
            }
            
        }
        else{
            //console.log('Hi123');
            return(<div></div>);
        }
    }

    const DishDetail= (props)=>{
        console.log('DishDetail Component Component Rendered invoked');
        return (
            <div class="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.selectedDish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                
                    <ul className="list-unstyled">
                        <RenderCommments dish={props.selectedDish}/>
                    </ul>
                    
                </div>
            </div>
            </div>
        );
        
    }


export default DishDetail;