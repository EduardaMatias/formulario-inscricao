import * as S from './styles'

type props  = {
    children?: any
    handleOnClick(): void
    isLoading: boolean
}

function Button({ children, handleOnClick, isLoading }: props) {
    return (
        <S.Button onClick={handleOnClick} disabled={isLoading ? true : false}>{children}</S.Button>
    )
}

export default Button