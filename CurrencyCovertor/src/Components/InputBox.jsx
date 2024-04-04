

function InputBox({
    label,
    amount,
    onchangeAmount,
    onchangeCurrency,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false
})
{
    return (
        <div className="">
                        <div>
                <input value={amount} 
                onChange={(e)=>{onchangeAmount && onchangeAmount(Number(e.target.value))}}
                type="number" placeholder={label} className="border-2 p-[2px] rounded"/>
                <select 
                value={selectedCurrency}
                onChange={(e)=>{onchangeCurrency&& onchangeCurrency(e.target.value)}}
                disabled={currencyDisabled}>
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default InputBox;