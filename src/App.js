import React,{useState} from 'react'
//import { createRoot } from 'react-dom/client';
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "62fb5b62";
  const YOUR_APP_KEY ="2829ea6fe9ab71e7dc8a9574419ceebb	";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App