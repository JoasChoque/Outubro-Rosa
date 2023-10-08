import React from "react";
import OutubroRosa from "../img/outubro-rosa.png"
import * as S from "../styles/Styles"
import Header from "./Header";

function Main() {
    return (
        <>
            <S.Main>
                <S.MainDivInit>
                    <S.MainImage src={OutubroRosa} alt="Imagem Outubro Rosa" />
                </S.MainDivInit>

                <S.MainDivEnd>
                <Header/>
                <S.MainDivContent>
                        <S.MainTitle>Outubro Rosa: Conscientização e Esperança</S.MainTitle>
                        <S.MainText>O Outubro Rosa é um movimento global que acontece em outubro para aumentar a conscientização sobre o câncer de mama. A cor rosa é o símbolo dessa causa, representando esperança e solidariedade. Durante este mês, lembramos a importância da detecção precoce, apoio às pessoas afetadas e doações para a pesquisa. Vamos juntos lutar contra o câncer de mama.</S.MainText>
                        <S.MainButton>Saiba mais</S.MainButton>
                        </S.MainDivContent>
                </S.MainDivEnd>
            </S.Main>
        </>
    )
}

export default Main;