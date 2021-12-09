import styled from 'styled-components'
import { corPrimaria , conteudoClaro} from '../Ui/variaveis';

export const StyleFooter = styled.footer `
    background-color: ${corPrimaria};
    color: ${conteudoClaro};
    font-weight: 600;
    display: block;
    justify-content: center;
    padding: 2vh 15vw;
    margin: 0 auto;
    height: 12vh;
    align-items: center;
    text-align: center
`; 

const Footer = () => {
    return(
        <>
        <StyleFooter>
            <footer>
                <p>Desenvolvido por Renato Barros</p>
                <p>Fet. by Alura</p>
            </footer>
        </StyleFooter>
        </>
    )
}

export default Footer

