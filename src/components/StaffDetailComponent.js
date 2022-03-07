import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';



    
    
    function RenderStaff({staff}) {
        
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4 col-lg-3'>
                            <Card>
                                <CardImg src={staff.image} alt={staff.name} />
                            </Card>    
                        </div>
                    </div>
                </div>
            );
    }
        
    
    function RenderComments({comments}){
        if(comments!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map((comment) =>{
                            return(
                                <div key={comment.id}>
                                    <li>
                                        <p>{comment.comment}</p>
                                        <p>{comment.rating}</p>
                                        
                                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            )
        }
     
        else{
            return(
                <div></div>
            );
        }
    }


    const StaffDetail = (props) => {
        if(props.staff !=null){
            return(
                
                    <div className='container'>
                        <div className='row'>
                                <Breadcrumb>
                                    
                                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                                </Breadcrumb>
                                <div className='col-md-6'>
                                    <h3>{props.staff.name}</h3>
                                    <hr />
                                </div>

                                <div className='row'>
                                    <RenderStaff staff={props.staff} />
                                    <RenderComments comments={props.comments} /> 
                                </div>

                        </div>                        

                    </div>
              
               

            );
        }
        else{
            return(
                <div></div>
            );
        }
        


        
    }


export default DishDetail;