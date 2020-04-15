import React, {Component} from 'react';
import M from "materialize-css";
import "materialize-css/js/carousel.js";
import sample1 from '../images/sample1.jpeg';
import sample2 from '../images/sample2.jpg';
import sample3 from '../images/sample3.jpg';
import sample4 from '../images/sample4.jpg';

class HomeSlider extends Component {
    constructor(){
        super()

         this.M = window.M;
    }

    componentDidMount() {
        let options = {
            fullWidth: true,
            indicators: true,    
    }
        let elems = document.querySelectorAll('.slider');
        let instances = M.Slider.init(elems, options);
    }   

    render(){
        return (
            <div>
                <section class="black">           
                    <div class="slider">
                        <ul class="slides">
                        <li>
                            <img src={sample1}/>
                            <div class="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text ">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={sample2}/>
                            <div class="caption center-align">
                            <h3>Left Aligned Caption</h3>
                            <h5 class="light grey-text ">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={sample3}/> 
                            <div class="caption center-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 class="light grey-text">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={sample4}/> 
                            <div class="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text">Here's our small slogan.</h5>
                            </div>
                        </li>
                        </ul>
                    </div>   
            </section>  
        </div>

        );
    }
  
}

export default HomeSlider;
