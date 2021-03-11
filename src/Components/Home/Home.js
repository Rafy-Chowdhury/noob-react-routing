
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Home.css'


const Home = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setClubs(data.teams));
    } ,[])
    
    //console.log(teams);


    return (
        <div>
             <h1 className="title">World Class Clubs</h1>
           {
               clubs.map(club => <Details club={club}></Details>)
           }
           
        </div>
    );
};

export default Home;