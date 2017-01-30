import React from 'react'
import Navs from './Nav'
import { Navbar , FormGroup , ButtonToolbar, NavItem ,Nav, Button , FormControl} from 'react-bootstrap';
import {Link} from 'react-router'
import Slider from 'react-slick'
import Footer from './Footer'
class Home extends React.Component {

  render(){

    var settings = {
      slidesToShow: 4,
      infinite: true,
      speed: 1500,
      arrows: true,
      centerMode: true,
      autoplay: true
    };

    const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]

    return(
      <div>
        <Navs/>
        <header>
          <div className="container">
           <div className="row">
               <div className="col-sm-7">
                   <div className="header-content">
                       <div className="header-content-inner">
                           <h1 className="header-slogan">Explore, Discover, Experience</h1>
                           <h3>Find activity, hobby and experience for your holiday</h3>
                       </div>
                   </div>
               </div>
           </div>
       </div>
        </header>
        {/*<div className="header-text-container">
          <h4 className="header-text">
          <span className="header-slogan">Travel. Discover. Play.</span><br></br>
          Find activity, hobby and experience for your holiday
          </h4>
        </div>*/}
        <div className="container">
            <div className="row">
              <div className="col-md-12">
              <form>
                <FormGroup>
                <FormControl
           type="text"
           placeholder="Activity, City, Owner"
         />
         </FormGroup>
              </form>
              </div>
            </div>
            {/*
            <div className="portlet light">
            <div className="portlet-title">
                    <div className="caption font-kademy">Popular City</div>
                    </div>
                    <div className="portlet-body">
                    <div className="row">
                    {
                      city.map((value , index) => {
                        return(
                            <div className="col-md-3" key={index+value}>
                            <Link to={'search/city/'+value} >
                              <p className="searchfont">{value}</p>
                              </Link>
                            </div>
                        );
                      })}
                    </div>

                    </div>  */}
                    <div className="city-container">
                    <h3>Popular City</h3>

                    <div className="row">
                    <Slider {...settings}>
                    {
                      city.map((value , index) => {
                        return(
                            <div className="imgcontainer">
                            <Link to={'search/city/'+value} className="hf" key={value.toString()+index.toString()}>
                              <img src={'img/'+value+'.jpg'} className="img-city-rec"></img>
                              <p>{value}</p>
                              </Link>
                            </div>
                        );
                      })}
                      </Slider>
                    </div>
                    </div>
              </div>
              <Footer/>
      </div>


    );
  }
}

export default Home
