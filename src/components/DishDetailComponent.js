import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import datFormat from "dateformat";
const now=new Date();

class DishDetail extends Component {

    constructor(props){
        super(props);

    }

    renderDish(dish) {
        if(dish!=null){
            return(
                <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                   <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        <CardTitle>{dish.rating}</CardTitle>
                        <CardTitle>{dish.comment}</CardTitle>
                        <CardTitle>{dish.author}</CardTitle>
                        <CardTitle>{dateFormat(dish.date),"dd/mm/yyyy"}</CardTitle>
                    </CardBody> 
                </Card>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }


    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return(
            <div className="container">
                <div className="row">
                    
                        {menu}
                    
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}
export default DishDetail;