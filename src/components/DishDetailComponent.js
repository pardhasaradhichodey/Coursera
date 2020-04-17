import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderDish(dish) {
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

    renderCommments(dish) {
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

    render(){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                
                    <ul className="list-unstyled">
                        {this.renderCommments(this.props.selectedDish)}
                    </ul>
                    
                </div>
            </div>

        );
        
    }

}

export default DishDetail;