//component
class App extends React.Component
{
    render()
    {
        //return <h1>HELLO WORLD </h1>
    //    return React.createElement('div',null,"Hello world")
    const dv = React.createElement('div',null,"hellow world")
    return dv;
    }
}
ReactDOM.render(<App/>,document.getElementById('app'))