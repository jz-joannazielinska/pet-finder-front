import React from 'react';
import { ButtonStyle, FootIconStyle, IconBack, IconLove, ImageStyle } from './CardStyled';
import dog1 from '../../assets/images/dog_2.png';
import BackIcon from '../../assets/icons/back.svg';
import Gender from '../../assets/icons/menFat.svg';
import Clock from '../../assets/icons/clock.svg';
import Pets from '../../assets/icons/pets.svg';
import Bone from '../../assets/icons/bone.svg';
import { Link } from 'react-router-dom';
import './card.css';


function Card() {
    return (
        <div className='container'>
            <div className="row">
                <div className="card" style={{padding: "20px", maxWidth: "500px", border: "none"}} >
                    <ImageStyle id="img" src={dog1} className="card-img-top" alt="Hector" />
                    <IconBack>
                        <Link to="/"><img src={BackIcon} style={{width: "30px", height: "30px" }} alt="BackIcon"></img></Link>
                    </IconBack> 
                    <IconLove>
                        {/* <img src={LoveIcon} style={{width: "30px", height: "30px", fill: "#fff" }} alt="LoveIcon"></img> */}
                        {/* <input id="toggle-heart" type="checkbox"/>
                        <label for="toggle-heart" aria-label="like">
                        <img src={LoveIcon}></img> */}
                         <div className="icon">
                            <svg className="heart-main" viewBox="0 0 512 512" width="100" title="heart">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                            </svg>
                            <svg className="heart-background" viewBox="0 0 512 512" width="100" title="heart">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                            </svg>
                        </div>
                        {/* </label> */}
                    </IconLove>
                    <FootIconStyle />
                        <div className="card-body p-3">
                        <h4 className="card-title mb-1" style={{color: "#4487a2"}}>Hector</h4>
                        <p style={{color: "#858585"}}>Jack Russell Terrier</p>
                        <div className="row justify-content-around" style={{margin: "2rem 0"}}>
                            <div style={{color: "#4a4b4c", backgroundColor: "#f2f2f2", borderRadius: "15px", padding: "0px", flex: "0 0 23%", maxWidth: "23%" }} className="col-3">
                                <div className="col-12" style={{ padding: "10px 5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <img className="pb-2" style={{ width: "23px" }} src={Gender} alt="gender" />
                                    <div className= "text-center" style={{ color: "rgb(115, 115, 115)", fontWeight: "700", fontSize: "12px" }}>Boy</div>
                                </div>
                            </div>
                                <div style={{ color: "#4a4b4c", backgroundColor: "#f2f2f2", borderRadius: "15px", padding: "0px", flex: "0 0 23%", maxWidth: "23%" }} className="col-3">
                                    <div className="col-12" style={{ padding: "10px 5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <img className="pb-2" style={{ width: "23px" }} src={Clock} alt="Clock" />
                                    <div className= "text-center" style={{ color: "rgb(115, 115, 115)", fontWeight: "700", fontSize: "12px" }}>2 years</div>
                                </div>
                            </div>
                                <div style={{ color: "#4a4b4c", backgroundColor: "#f2f2f2", borderRadius: "15px", padding: "0px", flex: "0 0 23%", maxWidth: "23%" }} className="col-3">
                                    <div className="col-12" style={{ padding: "10px 5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <img className="pb-2" style={{ width: "25px" }} src={Bone} alt="Bons" />
                                    <div className= "text-center" style={{ color: "rgb(115, 115, 115)", fontWeight: "700", fontSize: "12px" }}>Active</div>
                                </div>
                            </div>
                                <div style={{ color: "#4a4b4c", backgroundColor: "#f2f2f2", borderRadius: "15px", padding: "0px", flex: "0 0 23%", maxWidth: "23%" }} className="col-3">
                                    <div className="col-12" style={{ padding: "10px 5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <img className="pb-2" style={{ width: "23px" }} src={Pets} alt="pets" />
                                    <div className= "text-center" style={{ color: "rgb(115, 115, 115)", fontWeight: "700", fontSize: "12px" }}>Friendly</div>
                                </div>
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