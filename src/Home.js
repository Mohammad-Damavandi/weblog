import "./Home.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoTime } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import image1 from "./images/Ellipse 1.png";
import image2 from "./images/Ellipse 2.png";
import image3 from "./images/creating-a-brand-2mMhaoBGjCs-unsplash-removebg-preview 1.png";
import image4 from "./images/Group 25.png"
import Body1 from "./components/Body1";
import { useState } from "react";
import { Article } from "./data";

function Home() {

  const[courses , setCourses] = useState(Article)


  const expand = "md";
  return (
    
      <>
        <Navbar
        style={{ backgroundColor: "white" }}
        expand={expand}
        className="mb-3"
      >
        <Container>
          <Navbar.Brand style={{ fontFamily: "lalezar", fontSize: "25px" }}>
            <IoTime style={{ marginBottom: "10px", color: "#094B72" }} />
            Lawliet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <NavLink className="active  mx-2">CONTACT</NavLink>
                <NavLink className="active mx-2">TESTIMONIALS</NavLink>
                <NavLink className="active mx-2">ABOUT</NavLink>
                <NavLink style={{ marginRight: "150px" }} className="active">
                  TERMS
                  <IoMdSearch
                    style={{ fontSize: "20px", marginLeft: "80px" }}
                  />
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

     <body>
      <img className="image3" src={image3} style={{width : '330px'}} />
      <img className="image1" src={image1} style={{width : '550px' , height : '550px' , marginLeft : '800px'}} />
      <img className="image2" src={image2} style={{width : '400px' , marginLeft : '800px'}}  />  
 
     <div className="circle1"><div className="circle2"></div></div>

      <div className="div1">
        <p className="p2">Stay connected to the upcoming & Recent jobs</p>
        <p className="p1">New</p>
      </div>

      <p style={{fontSize : '90px' , color : '#094B72' , lineHeight : '100px' , width : '700px' , marginLeft : '120px'}}>Your Solution Legal Consultacy</p>

      <p style={{marginLeft : '120px' , width : '380px' , marginTop : '25px' , wordSpacing : '3px'}}>We are here to help you take care of your legality with the best service especially for you.</p>
      <Button style={{width : '110px' , height : '50px' ,marginLeft : '120px' , marginTop : '20px' , background : '#094B72' , fontSize : '10px'}}>GET STARTED</Button>
      <p style={{marginLeft : '120px' , marginTop : '40px' , color: '#8B8C8C'}}>Trusted by 10+ companies in indonesia</p>

      <img style={{marginLeft : '120px' , marginTop : '5px'}} src={image4} />

      <div className="div2">
        <p style={{color : '#33475B' , fontSize : '25px', textAlign : 'center' , paddingTop : '10px'}}>
          Tiara Andini
          </p>
          <br />
          <p style={{color : '#87898C' , fontSize : '16px', paddingLeft : '96px' , marginTop : '-40px'}}>-Lawyer</p>
      </div>

    
        
            <div className="component">
              <Container fluid = 'md'>
                <Row className="my-5">
                  
                <Col>
                <p><b style={{color : '#2D2F30' , fontSize : '48px' , position : 'absolute' , top : '850px' , width : '419px' , left : '100px'}}>Why do we help with legalization?</b>

                <span style={{color : '#8B8C8C' , fontSize : '20px' , position : 'absolute' , top : '1030px' , width : '330px' , left : '100px' , lineHeight : '35px' , wordSpacing : '1px'}}>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</span>
                </p>
                </Col>

                <Col>
                {courses.map((course) =>(
                  <Body1 {...course} />
                ))}
                </Col>

                </Row>  
              </Container>
            </div>

           <div className="matters">
              <p><b style={{fontSize : '30px' , marginLeft : '488px' , color : 'white' }}>Some count that matters</b></p>
              <p style={{fontSize : '14px' , marginLeft : '500px' , color : 'white' , marginTop : '15px'}}>Our achievement in the journey depicted in numbers</p>

                  <span style={{position : 'relative'}}>
                    <b style={{color : 'white' , left : '450px'  , fontSize : '25px' , position :'absolute' , top : '32px'}}>30</b>
                    <p style={{color : 'white' , left : '448px' , fontSize : '12px' , position :'absolute' , top : '63px'}}>clients</p>
                  </span>

                  <span style={{position : 'relative'}}>
                  <b style={{color : 'white' , left : '650px' , fontSize : '25px' , position :'absolute' , top : '30px'}}>300+</b>
                  <p style={{color : 'white' , fontSize : '12px' , position :'absolute' , top : '63px' , left : '620px'}}>Takenbusinesslegalities</p>
                  </span>

                  <span style={{position : 'relative'}}>
                    <b style={{color : 'white' , left : '870px' , fontSize : '25px' , position :'absolute' , top : '30px'}}>8</b>
                    <p style={{color : 'white' , fontSize : '12px' , position :'absolute' , top : '63px' , left : '835px'}} >YearsofJourney</p>
                  </span>
            </div>
           <hr />
    </body>
  
      </>

    
  );
}


export default Home;
