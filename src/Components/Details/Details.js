import React from 'react';
import './Details.css';
import {Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Details = (props) => {
    const {strTeam, strLeague, strSport, strTeamBadge, idTeam}=props.club;
    const history = useHistory();
    const exploreMore = idTeam => {
        const url =`club/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="detais">
          <div className="mt-5 d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top " src={strTeamBadge} />
          <Card.Body>
            <Card.Title><h2>{strTeam}</h2></Card.Title>
            <Card.Text>
             <p>league: {strLeague}</p>
            <h4>Sports: {strSport}</h4>
            <h5>Team-id:{idTeam}</h5>
           </Card.Text>
            <Button onClick={() => exploreMore(idTeam)} variant="primary">Explore <FontAwesomeIcon icon=    {faArrowRight} /></Button>
          </Card.Body>
        </Card>
        
          </div>
          
        </div>
    );
};

export default Details;