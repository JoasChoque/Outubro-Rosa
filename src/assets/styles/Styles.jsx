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

    @media screen and (max-width: 1400px){
       width:100%;
    
  }

  
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

    @media screen and (max-width: 1000px){
    display:none;
    
  }

`

export const ListaItem = styled.li`
    
    &:hover{
        color: #804f4f;
    }
`

export const Img = styled.img`
    width:1.6vw;
    height: 3.25vh;

    @media screen and (max-width: 800px){
    width:3.8vw;
    height: 3.30vh;
    
  }

  @media screen and (max-width: 500px){
    width:5.8vw;
    height: 4.30vh;
    
    
  }
`
export const DivImages = styled.div`
    width: 15vw;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 1400px){
        margin-left: auto;
    
  }

  @media screen and (max-width: 800px){
        margin-left: auto;
    
  }

  @media screen and (max-width: 500px){
   gap:10px;
    
    
  }
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

    @media screen and (max-width: 1000px){
        
        width:100%;
      }

      @media screen and (max-width: 500px){
        
        font-size: 1.55rem;
      }
`
export const Span =styled.span`

@media screen and (max-width: 800px){
        display:none;
    
  }

  @media screen and (max-width: 500px){
    font-size: 0.10em;
    
  }

`
export const MainText = styled.p`
    font-family: 'Carme', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #523030;
    width: 32vw;
    height: 28vh;
    text-align: end;

    @media screen and (max-width: 1000px){
    
    width:100%;
  }

 

 
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

  @media screen and (max-width: 700px){
    width: 50vw;
    height: 5vh;
    border-radius: 30px;
    
  }

  @media screen and (max-width: 500px){
 
    
}
    `
export const MainImage = styled.img`
    width: 33vw;
    height: 59vh;
    @media screen and (max-width: 700px){
        display:flex;
    
  }
  
`

export const MainDivInit = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;

    @media screen and (max-width: 800px){
        display:none;
    
  }

 
`

export const MainDivEnd = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FBE0F8;

    @media screen and (max-width: 1000px){
     width: 90vw;
    height: 90vh;
        
      }
`

export const MainDivContent = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    margin-bottom: 50px;

    @media screen and (max-width: 1000px){
       align-items:center
    
  }

  @media screen and (max-width: 500px){
    margin-bottom: 50px;
    
  }
 
`

export const ImgMobile = styled.img`
display:none;
  @media screen and (max-width: 500px){
    display:flex;
    width:80vw
    
  }

`


    
