
import './App.css'
import BottomBox from './components/BottomBox'
import BoxDownLine from './components/BoxDownLine';
import UpperBox from './components/UpperBox'
import "@fontsource/poppins/500.css";

function App() {


  return (
    <main className='w-[1500px] h-[725px] bg-[#1E1E1E] flex'>
      <div className='w-[720px] h-[320px] max-lg:hidden  my-auto'>

      </div>
      <div className='flex flex-col gap-5 mt-4 mx-4' >
        <UpperBox />
        <BoxDownLine />
        <BottomBox />
        <BoxDownLine />
      </div>

    </main>
  )
}


export default App

