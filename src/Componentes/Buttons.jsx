
const Buttons = ({change,colors}) => {
    
   

return(
        <div>
            <button style={{background:colors}} onClick={change}> <i className="fa-solid fa-shuffle icon "></i> </button>
        </div>
        
    )
}
export default Buttons;
