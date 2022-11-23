import * as S from './styles'

type props  = {
    children?: string
    handleOnClick(): void
}

function Button({ children, handleOnClick }: props) {
    return (
        <S.Button onClick={handleOnClick}>{children}</S.Button>
    )
}

export default Button