import Myheading from "./components/Myheading";
import './style/App.css';
import  {MyheadingList as Ansh, MyheadingList2, MyheadingList3, MyheadingList4} from "./components/Myheading";
const a = "sapna";
const app = ()=>{
    return (
    <>
        <div>
            <Myheading name='Ansh' age='20' text='abcdefg'/>
            <Ansh/> 
            <MyheadingList2/> 
            <MyheadingList3/> 
            <MyheadingList4/>
            <h1>hello ansh with {a}</h1>
        </div>
    </>   

    )
}

export default app;