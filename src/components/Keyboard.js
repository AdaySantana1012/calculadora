// Context
import { useContext } from "react";
import calcContext from "../context/calcContext";
const Keyboard = () => {
    const calculatorContext = useContext(calcContext);
    const { setDisplay, setOperator, getCalculate, getTotal, clearAll, deleteNumber, currentKey, changeCurrentKey } = calculatorContext;
    
    function changeOperator(operator) {
        setOperator(operator);
    }

    const handleClick = (e) => {
       switch (e.target.dataset.action) {
           case 'number':
               setDisplay(e.target.dataset.value);
               break;

            case 'sum':
                changeCurrentKey(e.target.dataset.action);
                changeOperator(e.target.dataset.value)
                getCalculate();
                break;

            case 'subtract' :
                changeCurrentKey(e.target.dataset.action);
                changeOperator(e.target.dataset.value)
                getCalculate();
                break;

            case 'multiply':
                changeCurrentKey(e.target.dataset.action);
                changeOperator(e.target.dataset.value);
                getCalculate();
                break;

            case 'divide':
                changeCurrentKey(e.target.dataset.action);
                changeOperator(e.target.dataset.value);
                getCalculate();
                break

            case 'equal':
                getTotal();
                break
            
            case 'clear':
                clearAll();
                break;

            case 'delete':
                deleteNumber();
                break;

                default:
                    break;

        }
    }
    return ( 
        <table className="rounded-sm border-collapse w-full h-60 border cursor-pointer table-auto">
            <tbody>
                <tr>
                    <td 
                        className={`border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors`}
                        onClick={handleClick}
                        colSpan= "2"
                        data-value={7}
                        data-action='clear'
                    >AC</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        width={130}
                        data-value={7}
                        data-action='delete'
                    >DEL</td>
                    <td 
                        className= {`border  border-orange-600 bg-orange-400 hover:bg-orange-600 text-white transition-color ${currentKey === 'divide' ? 'bg-orange-600' : ''}`}
                        onClick={handleClick}
                        data-value="/"
                        data-action='divide'
                    >/</td>
                </tr>
                <tr>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={7}
                        data-action='number'
                    >7</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={8}
                        data-action='number'
                    >8</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={9}
                        data-action='number'

                    >9</td>
                    <td 
                        className={`border border-orange-600 bg-orange-400 hover:bg-orange-600 text-white transition-colors ${currentKey === 'multiply' ? 'bg-orange-600' : ''}`}
                        onClick={handleClick}
                        data-value="*"
                        data-action='multiply'
                    >x</td>
                </tr>
                <tr>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={4}
                        data-action='number'
                    >4</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={5}
                        data-action='number'
                    >5</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={6}
                        data-action='number'
                    >6</td>
                    <td 
                        className={`border border-orange-600 bg-orange-400 hover:bg-orange-600 text-white transition-colors ${currentKey === 'subtract' ? 'bg-orange-600' : ''}`}
                        onClick={handleClick}
                        data-value="-"
                        data-action='subtract'
                    >-</td>
                </tr>
                <tr>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={1}
                        data-action='number'
                    >1</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={2}
                        data-action='number'
                    >2</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value={3}
                        data-action='number'
                    >3</td>
                    <td 
                        className={`border border-orange-600 bg-orange-400 hover:bg-orange-600 text-white transition-colors ${currentKey === 'sum' ? 'bg-orange-600' : ''}`}
                        onClick={handleClick}
                        data-value= "+"
                        data-action='sum'
                    >+</td>
                </tr>
                <tr>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white col-span-full transition-colors" 
                        colSpan={2}
                        onClick = {handleClick}
                        data-value={0}
                        data-action='number'
                    >0</td>
                    <td 
                        className="border border-slate-600 bg-slate-400 hover:bg-slate-600 text-white transition-colors"
                        onClick={handleClick}
                        data-value="."
                        data-action='number'
                    >,</td>
                    <td 
                        className={`border border-orange-600 bg-orange-400 hover:bg-orange-600 text-white transition-colors ${currentKey === 'equal' ? 'bg-orange-600' : ''}`}
                        onClick={handleClick}
                        data-value="="
                        data-action='equal'
                    >=</td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Keyboard;