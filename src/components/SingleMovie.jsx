import  { Component } from 'react'
import { Card, Button, } from "react-bootstrap"
import Details from './Details'
import { Link } from 'react-router-dom'


class SingleMovie extends Component {

    state = {
        showDetails: false
    }
    
    render() {
        return (
            
                        <Card >
                            <Link to={'/details/' + this.props.movie.imdbID}>
                            <Card.Img variant="top" src={this.props.movie.Poster} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{this.props.movie.Title}</Card.Title>
                                <Card.Text>
                                    Year: {this.props.movie.Year}
                                </Card.Text>
                                <Button onClick={()=>{this.setState({showDetails:!this.state.showDetails})}}variant="primary">Details</Button>
                            </Card.Body>
                            {this.state.showDetails&& <Details id={this.props.movie.imdbID}/>}
                        </Card>
                   
        )
    }
}
export default SingleMovie