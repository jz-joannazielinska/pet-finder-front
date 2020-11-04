import React from 'react';
import { ButtonStyle, FootIconStyle, IconBack, IconLove, ImageStyle } from './CardStyled';
import dog1 from '../../assets/images/dog_2.png';
import BackIcon from '../../assets/icons/back.svg'
import LoveIcon from '../../assets/icons/heart.svg'


function Card() {
    return (
        <div className='container'>
            <div className="row">
                <div className="card" style={{padding: "35px 20px"}} >
                    <ImageStyle id="img" src={dog1} className="card-img-top" alt="Hector" />
                    <IconBack>
                        <img src={BackIcon} style={{width: "30px", height: "30px", }} alt="BackIcon"></img>
                    </IconBack> 
                    <IconLove>
                        <img src={LoveIcon} style={{width: "30px", height: "30px", fill: "#fff" }} alt="LoveIcon"></img>
                    </IconLove>
                    <FootIconStyle />
                        <div className="card-body p-3">
                        <h4 className="card-title mb-1">Hector</h4>
                        <p>Jack Russell Terrier</p>
                        <p className="card-text">Hector is extremely playful, active and funny. He needs a real family and care, because his last owner abandoned him on the street.</p>
                        <ButtonStyle href="/adopt">Adopt</ButtonStyle>
                    </div>
                </div>
            </div>
        </div>
    )}; 

    export default Card;