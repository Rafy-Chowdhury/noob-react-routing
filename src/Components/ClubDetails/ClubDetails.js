import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetails.css';
import image from '../../img/male.png';
import facebook from '../../img/Facebook.png';
import twitter from '../../img/Twitter.png';
import youtube from '../../img/YouTube.png';
import { Link } from 'react-router-dom';
const ClubDetails = () => {
    const {clubid} = useParams();
    const [teamInfo, setTeamInfo] = useState([]);

    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamInfo(data.teams.[0]))
    } , [clubid])

    const {strTeam,strTeamBanner, strAlternate,strGender,strCountry, strFacebook, strTwitter, strYoutube} = teamInfo;
    return (
        <div className="detailsInfo">
            <img src={strTeamBanner} alt=""/>
            
            <br/>
            <br/>
            <div className="container">
            <div className="detailsContainer">

            <div>
            <h4>name: {strTeam}</h4>
            <h5>Alternate-Name: {strAlternate}</h5>
            <h5>Origin: {strCountry}</h5>
            <h4> gender: {strGender}</h4>
            </div>

            <div className="imgCheak">
                <img src={image} alt=""/>
            </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        
            <p><strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum, laborum officiis magni, cum molestias dolor obcaecati dolores praesentium aut nihil iste ullam soluta, velit enim animi quo placeat? Placeat asperiores ipsa architecto enim perspiciatis, quam rem, nemo debitis assumenda quod eum possimus amet impedit facilis rerum accusamus quis necessitatibus molestias eligendi excepturi. Eum, qui reprehenderit, ipsa ullam veniam ipsam sunt, alias nesciunt repudiandae harum saepe modi enim! Nobis, sit! Amet quibusdam sed quidem reiciendis earum neque pariatur dolorum? Facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cumque sapiente amet illum alias id illo ad ex neque architecto, nostrum harum natus! Quis, temporibus? Labore consequuntur sed perspiciatis veniam libero possimus, quod nobis! Optio nesciunt, sunt fugiat illo nostrum consectetur ab voluptatem tempora saepe quis natus doloribus ullam magnam itaque. In id provident temporibus dicta fuga facere odit? Commodi sit non ex eos, et voluptatibus labore nam porro, dolorem quo amet ab tempora eligendi delectus vero ipsum? Reprehenderit, temporibus.</strong></p>
            <br></br>
            <br></br>
            <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nam ipsam nesciunt. Rerum dolorem incidunt pariatur adipisci saepe dolorum maxime sequi soluta sunt inventore. Ab, reprehenderit quasi tempora ut aut in dolores, nostrum atque laboriosam non consequatur dignissimos optio eos impedit maiores esse facilis dicta, veniam repellendus nihil exercitationem quod? Dolorem expedita minus illo vitae esse dolorum ipsam quis quas, optio amet quibusdam sint, porro architecto. Consequuntur nam mollitia tempora, odit libero reprehenderit labore voluptates quos perspiciatis dolorem, at, reiciendis quidem repellat tenetur sit facere laborum eius corrupti inventore voluptatibus quaerat tempore! Veritatis repudiandae omnis impedit, sed dolores nulla reprehenderit deserunt, explicabo eos numquam officia magni, nemo voluptates? Ipsam, consequuntur vitae praesentium possimus id numquam iste mollitia esse minus dolor.</strong></p>
        
        <div className="resizeImg">
        
        <Link to={strTwitter}><img src={twitter} alt=""/></Link>
        <Link to={strFacebook}><img src={facebook} alt=""/></Link>
        <Link to={strYoutube}><img src={youtube} alt=""/></Link>   
        
        
        
        </div>
            
        </div>
        </div>
    );
};

export default ClubDetails;