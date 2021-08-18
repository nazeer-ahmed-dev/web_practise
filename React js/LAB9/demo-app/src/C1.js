import React from "react";

 export default class C1 extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={person:[],isloading:true}
  }
  async componentDidMount()
  {
    
    const resopnse = await fetch("  https://www.anapioficeandfire.com/api/books?pageSize=30%22/")
  
    //const resopnse = await fetch("https://www.maciejtreder.com/asynchronous-javascript/directors/")
    const persons = await resopnse.json()
    this.setState({person:persons,isloading:false})
  }
  
  render()
  {

    if (this.state.isloading===true)
    {
      return <div>loading data..</div>
  }
  else
  {
   return <table border="2px">
      <thead>
        <tr>
          <td>
            Id
          </td>
          <td>
            Name
          </td>
        </tr>
      </thead>
      <tbody>
          {this.state.person.map((per)=>(
            <tr>
              <td>
                {per.id}
              </td>
              <td>
                {per.name}
              </td>
            </tr>
          ))}
         
      </tbody>
    </table>
   
  }
}
}

