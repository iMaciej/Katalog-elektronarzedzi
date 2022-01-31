import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.imageurl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <div className="movie-subtitle">Producent: {movie.director}</div>
        <Card.Text>{movie.description}</Card.Text>
        <h5 style={{ color: "#0bac26" }}>Dane Techniczne</h5>
        {movie.actors.map((a, index) => (
          <p className="actor" key={index}>
            {a}
          </p>
        ))}      
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

// title
// director
// description
// actors
// imageurl
