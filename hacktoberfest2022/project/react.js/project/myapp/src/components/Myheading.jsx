const Myheading = ({name,age,text})=>{
    const a = text;
    return(
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{a}</h3>
    </div>
    
    
    )
};
const MyheadingList = ()=><h1>MyheadingList</h1>;
const MyheadingList2 = ()=><h1>MyheadingList2</h1>;
const MyheadingList3 = ()=><h1>MyheadingList3</h1>;
const MyheadingList4 = ()=><h1>MyheadingList4</h1>;
    
    

export default Myheading;
export {MyheadingList, MyheadingList2, MyheadingList3, MyheadingList4};