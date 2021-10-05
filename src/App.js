import React,{useState} from 'react';
import './App.css';
import Heading from './components/Heading';
import Content1 from './components/Content1';
import Footer1 from './components/Footer1';

  
function App() {
  const [customername,setCustomerName]= useState([
    
  ])
  const [totaltip, setTip] = useState([0])

    const AddCustomerName=(link)=>{
      setCustomerName([...customername,link])
    }

    const AddTip=(link)=>{
      setTip([...totaltip,link]);
      console.log(setTip);
      
    }
    console.log(AddTip);

  

  return (
    <>
    <div className="container  my-2 banner">
      <div className ="inner">
    <Heading/>
    <Content1 customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip} />
    <Footer1/>
    </div>
    </div>
   
    
    </>
  );
}

export default App;
