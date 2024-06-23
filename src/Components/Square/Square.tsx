import './Square.css'

export const Square = ({color}: {color: string}) => {
    return (
        <div style={{backgroundColor: color}} className='Square'/>
    )
}
