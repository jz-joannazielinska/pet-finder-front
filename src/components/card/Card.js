import React from 'react';
import { ButtonStyle, FootIconStyle, IconBack, IconLove, ImageStyle } from './CardStyled';
import dog1 from '../../assets/images/dog_2.png';
import BackIcon from '../../assets/icons/back.svg';
import LoveIcon from '../../assets/icons/heart.svg';
import Gender from '../../assets/icons/menFat.svg';
import Clock from '../../assets/icons/clock.svg';
import Pets from '../../assets/icons/pets.svg';
import Bone from '../../assets/icons/bone.svg';


function Card() {
    return (
        <div className='container'>
            <div className="row">
                <div className="card" style={{padding: "35px 20px", maxWidth: "500px", border: "none"}} >
                    <ImageStyle id="img" src={dog1} className="card-img-top" alt="Hector" />
                    <IconBack>
                        <img src={BackIcon} style={{width: "30px", height: "30px" }} alt="BackIcon"></img>
                    </IconBack> 
                    <IconLove>
                        <img src={LoveIcon} style={{width: "30px", height: "30px", fill: "#fff" }} alt="LoveIcon"></img>
                    </IconLove>
                    <FootIconStyle />
                        <div className="card-body p-3">
                        <h4 className="card-title mb-1" style={{color: "#4487a2"}}>Hector</h4>
                        <p style={{color: "#858585"}}>Jack Russell Terrier</p>
                        <div class="row justify-content-around" style={{margin: "2rem 0"}}>
                            <div style={{color: "#4a4b4c", display: "grid", justifyContent: "center", backgroundColor: "#f2f2f2", borderRadius: "5px", paddingTop: "20px", paddingBottom: "20px", alignItems: "center", flex: "0 0 23%", maxWidth: "23%"}} class="col-3">
                                <img style={{width: "30px"}} src={Gender} alt="gender" />
                                <div style={{color: "rgb(115, 115, 115)", fontWeight: "500"}}>Boy</div>
                            </div>
                            <div style={{color: "#4a4b4c", display: "grid", justifyContent: "center", backgroundColor: "#f2f2f2", borderRadius: "5px", paddingTop: "20px", paddingBottom: "20px", alignItems: "center", flex: "0 0 23%", maxWidth: "23%"}} class="col-3">
                                <img style={{width: "30px"}} src={Clock} alt="Clock" />
                                <div style={{color: "rgb(115, 115, 115)", fontWeight: "500"}}>2 years</div>
                            </div>
                            <div style={{color: "#4a4b4c", display: "grid", justifyContent: "center", backgroundColor: "#f2f2f2", borderRadius: "5px", paddingTop: "20px", paddingBottom: "20px", alignItems: "center", flex: "0 0 23%", maxWidth: "23%"}} class="col-3">
                                <img style={{width: "30px"}} src={Bone} alt="Bons" />
                                <div style={{color: "rgb(115, 115, 115)", fontWeight: "500"}}>Active</div>
                            </div>
                            <div style={{color: "#4a4b4c", display: "grid", justifyContent: "center", backgroundColor: "#f2f2f2", borderRadius: "5px", paddingTop: "20px", paddingBottom: "20px", alignItems: "center", flex: "0 0 23%", maxWidth: "23%"}} class="col-3">
                                <img style={{width: "30px"}} src={Pets} alt="pets" />
                                <div style={{color: "rgb(115, 115, 115)", fontWeight: "500"}}>Friendly</div>
                            </div>
                        </div>
                        <p style={{color: "#858585"}}className="card-text mb-4">Hector is extremely playful, active and funny. He needs a real family and care, because his last owner abandoned him on the street.</p>
                        <ButtonStyle href="/adopt">Adopt</ButtonStyle>
                    </div>
                </div>
            </div>
        </div>
    )}; 

    export default Card;