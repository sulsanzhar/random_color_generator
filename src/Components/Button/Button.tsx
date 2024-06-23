import './Button.css'

export const Button = ({onClickHandler}: {onClickHandler: VoidFunction}) => {
    return (
        <div className='button'>
            <button onClick={onClickHandler}>Сгенерировать цвет</button>
        </div>
    )
}
