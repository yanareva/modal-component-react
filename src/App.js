import './App.css';
import Modal from "./Components/Modal";
import {useState} from "react";

function App() {
    const [openModal,setOpenModal]=useState(false);
  return (
    <div className="App">
      <h1>Click on the button to open the modal</h1>
      <button className='open-btn' onClick={()=>setOpenModal(true)}>Open</button>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default App;
