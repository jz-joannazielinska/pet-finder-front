import styled from 'styled-components';
import foot from '../../assets/icons/footprint.svg';


export const ButtonStyle = styled.a`
    width: 100%;
    color: #4e9db9;
    background-color: #FFE135;
    border-radius: 25px;
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    border: 2px solid #FFE135;
    &:hover {
        color: #31495E;
        text-decoration: none;
        background-color: #fff;
        border: 2px solid #FFE135;
    }
`;

export const FootIconStyle = styled.span`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f8f8f8;
    top: 26vh;
    right: 12vw;
    &::after {
        content:"";
        display: block;
        width: 30px;
        height: 30px;
        background-image: url('${foot}');
        position: absolute;
        fill: #feab6e;
        top: calc( 50% - 15px);
        left: calc( 50% - 15px);
        transform: rotate(20deg);
    }
`;

export const ImageStyle = styled.img`
    border-radius: "5px";
`;

export const IconBack = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    @media (max-width: 430px) {
        left: 40px;
    }
`;

export const IconLove = styled.div`
    position: absolute;
    right: 50px;
    top: 50px;
    @media (max-width: 430px) {
        right: 40px;
    }
`;
