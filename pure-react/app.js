const Person = props => {
    return React.createElement('div',{},[
        React.createElement('h1',{},props.name),
        React.createElement('p',{},props.occupation)
    ])
}
const App = () =>{
    return React.createElement('div',{},[
        React.createElement('h1',{class:'title'} , 'React is  reander'),
        React.createElement(Person,{name:'Ansh',occupation:'student'},null),
        React.createElement(Person,{name:'Yash',occupation:'student'},null),
        React.createElement(Person,{name:'Sumit',occupation:'student'},null),
    ]);
    
};
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);