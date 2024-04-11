import React from "react";
import './style.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
class Card extends React.Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return (
            <div className="card  mb-3" style={{ width: '18rem' }}>
            <div className="position-relative">
            <div className="vote-circle">{this.props.voteAverage}</div>
            <img src={this.props.imagesrc} className="card-img-top" alt="..." />
            </div>
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">Popularity : {this.props.popularity}</p>
                <Link to={`/movie/${this.props.movieId}`} className="btn btn-primary">View</Link>
              </div>
            </div>
          );
    }
}

export default Card;

