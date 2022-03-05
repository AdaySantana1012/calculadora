// Context
import { useContext } from 'react';
import calcContext from '../context/calcContext';


const Display = () => {
    const calculatorContext = useContext(calcContext);
    const { display, total, isOperating } = calculatorContext;
    return ( 
        <div className="border-2 w-full h-20 mb-2 bg-slate-100 flex items-end justify-end overflow-x-hidden">
            <p className="text-right text-gray-800 text-3xl">{!isOperating ? display : total}</p>
        </div>
     );
}
 
export default Display;