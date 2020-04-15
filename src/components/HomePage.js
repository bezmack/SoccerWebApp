import React, {Component} from 'react';
import HomeSlider from './HomeSlider';
import M from "materialize-css";
import "materialize-css/js/carousel.js";

class HomePage extends Component{
  constructor(){
    super()

    this.M = window.M;
  
  }

    componentDidMount() {
    var elems1 = document.querySelectorAll(".modal");
    var instances1 = this.M.Modal.init(elems1);

    var elems2 = document.querySelectorAll('.scrollspy');
    var instances1 = this.M.ScrollSpy.init(elems2);
    }

    render(){
      return (
        <div className="App">
           <HomeSlider />
        </div>
      );
    }

}
export default HomePage;
