import Keyboard from './components/Keyboard';
import Display  from './components/Display';
import logo from './img/logo192.png'
// Context
import CalcState from './context/calcState';

function Calculadora() {
  return (
    <CalcState>
      <div className='flex justify-center flex-col items-center'>
        <img className='w-25' src={logo}></img>
        <h1 className='text-center mt-10 text-3xl text-slate-600 font-bold underline'>Calculadora React</h1>
      </div>
        <div className="block text-center mt-4 border-2 m-auto p-10 shadow-lg rounded-md w-11/12 md:w-4/12">
          <Display/>
          <Keyboard/>
        </div>
      </CalcState>
  );
}

export default Calculadora;
