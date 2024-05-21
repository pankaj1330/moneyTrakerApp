import { useState } from 'react'
import './App.css'

function App() {
  const [title,setTitle] = useState('');
  const [newdate,setnewdate] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState();
  const [total,setTotal] = useState(0);
  const [allTransactions,setAllTransactions] = useState([]);

  function setDefault(){
    setTitle('');
    setnewdate('');
    setDescription('');
    setPrice('');
  }

  function addNewTransaction(e){
    e.preventDefault();
     if(title == "" || price === ""){
      return alert("fill the title and price field");
     }
     let amount = parseInt(price);
     if(!amount){
      return alert("fill numeric value in Amount field");
     }
     setAllTransactions( prev => {
      return [...prev,{
        title,
        newdate,
        description,
        price : amount, 
      }]
     }

    )
    setTotal(prev => prev+amount);
    setDefault();
    return;
  }

  return (
    <>
      <h2 style={{textAlign:'center',marginBlock:"20px"}}>Money Tracker App</h2>
      <div className="project">
        <form onSubmit={addNewTransaction}>
          <div>
            <input type="text" placeholder='Titan Watch'
            value={title}
            onChange={e => setTitle(e.target.value)}/>
            <input type="datetime-local" value={newdate} 
            onChange={e => setnewdate(e.target.value)} />
          </div>
          <div>
            <input type="text" 
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder='-3000'/>
          </div>
          <div>
            <input type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='white color titan watch mens'/>
          </div>
          <input type="submit" value="Add new Transaction"/>
        </form>

        <ul className="list">

          {
            allTransactions.map((item,index) => {
              return <li key={index} className='item'>
                  <div>
                    <h4>{item.title}</h4>
                    <p className='price'>{item.price}</p>
                  </div>
                  <div>
                    <p>{item.description || "NA"}</p>
                    <p>{item.newdate || "NA"}</p>
                  </div>
                </li>
            }
            )
            
          }

        </ul>
        {
          allTransactions.length === 0 ? "" :
          <div className="total">
            <p>Total : {total}</p>
          </div>
        }
      </div>
    </>
  )
}

export default App
