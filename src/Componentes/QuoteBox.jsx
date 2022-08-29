const QuoteBox = ({quote,colors}) => {

return(
    <div>
        <div className="quote">
            <i style={{color:colors}} className="fa-solid fa-quote-left icon2" ></i>
            <p  style={{color:colors}}>{quote.quote}</p>
        </div>
                
            <p className="author" style={{color:colors}}>{quote.author}</p>
    </div>
    )
}
export default QuoteBox;