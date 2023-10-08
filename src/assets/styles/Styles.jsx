import styled from "styled-components"

//Header Contents
export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    height: 5vh;
    background-color: #FBE0F8;
    align-items: center;
`

export const Lista = styled.ul`
    list-style: none;
    display: flex;
    width: 30vw;
    justify-content: space-around;
    color: #523030;
    font-size: 1.25rem;
    font-weight: 400;
    font-family: 'Carme', sans-serif;
`

export const ListaItem = styled.li`
    
    &:hover{
        color: #804f4f;
    }
`

export const Img = styled.img`
    width:1.6vw;
    height: 3.25vh;
`
export const DivImages = styled.div`
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
`


//Main Contents
export const Main = styled.main`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const MainTitle = styled.h1`
    font-family: 'Carter One', sans-serif;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 400;
    color: #523030;
    width: 28vw;
    height: 7vh;
`

export const MainText = styled.p`
    font-family: 'Carme', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #523030;
    width: 32vw;
    height: 28vh;
    text-align: end;
`

export const MainButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: #EA69A0;
    color: #FFFFFF;
    font-size: 1rem;
    width: 13vw;
    height: 5vh;
    border-radius: 30px;
    font-family: 'Carter One', sans-serif;

    &:hover {
    background-color: #c54a7f;
  }
    `
export const MainImage = styled.img`
    width: 33vw;
    height: 59vh;
`

export const MainDivInit = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export const MainDivEnd = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FBE0F8;
`

export const MainDivContent = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    margin-bottom: 50px;
`