import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { TitleAbout } from '../about/aboutstyle';
import {InputContact,ContactContainer,BtnContact
    ,ContactText,ContactTextBottom,ContactTextBottomItem,ContactTextIcon} from "./contactstyle";
import {FaPhoneAlt,FaMapMarker} from "react-icons/fa";
import {FiMessageCircle} from "react-icons/fi";
const Contact:React.FC = () =>{
    return(
       <main>
           <TitleAbout>
               <div>
                   <h1>Contact</h1>
               </div>
           </TitleAbout>
           <ContactContainer>
               <Container>
                        <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <form action="">
                                        <InputContact>
                                            <input type="text" placeholder="email*"/>
                                        </InputContact>
                                        <InputContact>
                                            <input type="text" placeholder="subject"/>
                                        </InputContact>
                                        <InputContact>
                                            <textarea placeholder="Message..." name="" id="" cols={30} rows={10}></textarea>
                                        </InputContact>
                                        <div>
                                            <BtnContact value="send us a message" type="submit"/>
                                        </div>
                                    </form>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <ContactText>
                                        <h2>OUR OFFICES</h2>
                                        <p>
                                        Lorem ipsum dolor sit amet Lorem Ipsum. Proin qual de suis erestopius liqueenean sollicituin, lorem quis bibendum auct ornisi elit consequat ipsum, nec sagittis sem nibh id elit. Vulputate lorem.
                                        </p>
                                        <ContactTextBottom>
                                            <ContactTextBottomItem>
                                                <h3>NEW YORK</h3>
                                                <ul>
                                                    <ContactTextIcon>
                                                        <span><FaPhoneAlt/></span> 156-677-124-442-2887
                                                    </ContactTextIcon>
                                                    <ContactTextIcon>
                                                        <span><FiMessageCircle/></span> bazz@qodeinteractive.com
                                                    </ContactTextIcon>
                                                    <ContactTextIcon>
                                                        <span><FaMapMarker/></span> 184 Main Street Victoria 8007
                                                    </ContactTextIcon>
                                                </ul>
                                            </ContactTextBottomItem>
                                            <ContactTextBottomItem>
                                                <h3>NEW YORK</h3>
                                                    <ul>
                                                        <ContactTextIcon>
                                                            <span><FaPhoneAlt/></span> 156-677-124-442-2888
                                                        </ContactTextIcon>
                                                        <ContactTextIcon>
                                                            <span><FiMessageCircle/></span> bazz@qodeinteractive.com
                                                        </ContactTextIcon>
                                                        <ContactTextIcon>
                                                            <span><FaMapMarker/></span> Chiyoda, Tokyo 101-0064
                                                        </ContactTextIcon>
                                                    </ul>
                                            </ContactTextBottomItem>
                                        </ContactTextBottom>
                                    </ContactText>
                                </Grid>
                        </Grid>
               </Container>
           </ContactContainer>
           <section>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1935785.4326153505!2d107.62817379630961!3d15.444520700492669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142174e1471c7ef%3A0xd728608395487682!2zOTkgTMOqIFbEg24gSGnhur9uLCBLaHXDqiBN4bu5LCBOZ8WpIEjDoG5oIFPGoW4sIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1614852861296!5m2!1svi!2s" width="100%" height="450"  loading="lazy" title="map" style={{marginBottom:"-35px",border:"none"}}></iframe>
           </section>
       </main>
    )
}

export default Contact;