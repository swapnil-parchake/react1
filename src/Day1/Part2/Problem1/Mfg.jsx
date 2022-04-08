
const Mfg =(props)=>{
    return (
        <div>
        <h3>{props.header}</h3>
        <ul className="mobile">
            <li>{props.brand1}</li>
            <li>{props.brand2}</li>
            <li>{props.brand3}</li>
            <li>{props.brand4}</li>            
        </ul>
        </div>
    )
}
export default Mfg;