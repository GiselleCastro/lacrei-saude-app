import { OptionsLoginContainer } from './styles'
import Person from "../../../public/assets/person.svg"
import Cross from "../../../public/assets/cross.svg"
import { IsVisibleType } from './styles'

export function OptionsLogin({ isVisible }: IsVisibleType) {
    return (
        <OptionsLoginContainer isVisible={isVisible} data-testid='options-login'>
            <a href='https://paciente.lacreisaude.com.br/'> <Person /> Paciente</a>
            <div className='bar'></div>
            <a href='https://profissional.lacreisaude.com.br/'> <Cross /> Profissional</a>
        </OptionsLoginContainer>
    )
}