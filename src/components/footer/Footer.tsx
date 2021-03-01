import { Grid } from "@material-ui/core";
import React from "react";
import {FooterContainer,FooterContact,FooterContactIcon} from "./footersty"
import logo_2 from '../../images/footer-logo.png';
import img_footer from '../../images/footer-img-1.png';
import TextField from '@material-ui/core/TextField';
import {FaPhoneAlt,FaFacebookMessenger,FaMapMarker,FaUser,FaLock,FaEyeSlash} from "react-icons/fa";



const Footer:React.FC = () =>{

    return(
        <FooterContainer>
            <Grid container spacing={3}>
                <Grid item lg={3}>
                   <div>
                       <img src={logo_2} alt=""/>
                       <p style={{marginTop:"11px"}}>Create a cutting-edge online store in no time. It’s incredibly easy with Bazz.</p>
                       <img src={img_footer} alt=""/>
                   </div>
                </Grid>
                <Grid item lg={3}>
                    <FooterContact>
                        <h3>contact</h3>
                        <FooterContactIcon>
                            <span><FaPhoneAlt/></span>
                            <span className="text-footer">156-677-124-442-2887</span>
                        </FooterContactIcon>
                        <FooterContactIcon>
                            <span><FaFacebookMessenger/></span>
                            <span className="text-footer">bazz@qodeinteractive.com</span>
                        </FooterContactIcon>
                        <FooterContactIcon>
                            <span><FaMapMarker/></span>
                            <span className="text-footer">184 Main Collins Street 8007</span>
                        </FooterContactIcon>
                    </FooterContact>
                </Grid>
                <Grid item lg={3}>
                    <FooterContact>
                        <h3>profile</h3>
                        <FooterContactIcon>
                            <span><FaUser/></span>
                            <span className="text-footer">my account</span>
                        </FooterContactIcon>
                        <FooterContactIcon>
                            <span><FaLock/></span>
                            <span className="text-footer">check out</span>
                        </FooterContactIcon>
                        <FooterContactIcon>
                            <span><FaEyeSlash/></span>
                            <span className="text-footer">order tracking</span>
                        </FooterContactIcon>
                    </FooterContact>
                </Grid>
                <Grid item lg={3}>
                    <FooterContact>
                        <h3>newsletter</h3>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <FaFacebookMessenger />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="With a grid" />
                            </Grid>
                        </Grid>
                    </FooterContact>
                </Grid>
            </Grid>
        </FooterContainer>
    )
}

export default Footer;