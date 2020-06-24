import React, {Component} from 'react';

const TeamProfile = (props) => {
    return(
    <div class="col s12 m6 l4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
            <img src={props.player.imgURL}/>
            </div>
            <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.player.name}<i class="material-icons right">more_vert</i></span>
            <p><a href="https://www.manutd.com/en" target="_blank">Click Here!</a></p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">About the player<i class="material-icons right">close</i></span>
            <p>{props.player.aboutThePlayer}</p>
            </div>
        </div>
    </div>   
    )
}
export default TeamProfile;