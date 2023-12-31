import React from "react"
import IconWpp from "../img/icon-wpp.png"
import IconFace from "../img/icon-fac.png"
import IconInsta from "../img/icon-ins.png"
import * as S from "../styles/Styles"


function Header(){
    return(
        <>
    <S.Header>

      <S.Lista>
        <a href=""><S.ListaItem>Inicio</S.ListaItem></a>
        <a href=""><S.ListaItem>Sobre</S.ListaItem></a>
        <a href=""><S.ListaItem>Contato</S.ListaItem></a>
        <a href=""><S.ListaItem>Contribua</S.ListaItem></a>
      </S.Lista>

      <S.DivImages>
      <a href="#"><S.Img src={IconWpp} alt="Icone Whatsapp" /></a>
      <a href="#"><S.Img src={IconFace} alt="Icone Facebook" /></a>
      <a href="#"><S.Img src={IconInsta} alt="Icone Instagram" /></a>
      </S.DivImages>
      </S.Header>
        </>
    )
}

export default Header;