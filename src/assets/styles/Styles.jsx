import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    height: 10vh;
    background-color: #FBE0F8;
    align-items: center;
`

export const Lista = styled.ul`
    list-style: none;
    display: flex;
    width: 30vw;
    justify-content: space-around;
    color: #523030;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Carme', sans-serif;

`
export const Img = styled.img`
    width: 30px;
    height: 30px;
`
export const DivImages = styled.div`
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
`