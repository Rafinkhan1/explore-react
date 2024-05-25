
import './App.css'
import Count from './Count';
import Friends from './Friends';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick1 = () =>{
    alert('tumer name ki');
  }

  const handleClick3 = (number)=>{
    alert(number+4);
  }

  return (
    <>
     
      <h3>React Core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Count></Count>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick1}>button 2</button><br />
      <button onClick={() => handleClick3(3)}>button 3</button>
      
    </>
  )
}

export default App
