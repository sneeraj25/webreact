import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch ,useSelector } from 'react-redux';
import { incNumber,decNumber } from './actions/index';

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
        <section className='App App-header'>
          <div className='container'>
            
              <div className='head'>
                <h1>Increment / Decrement Counter</h1>
                <p>Using React and Redux</p>
              </div>
            <div className=''>
                
                <input type='text' className='form-control col-md-3 mx-auto' name='quantity' value = {myState}  />
                <a onClick={ () => dispatch(decNumber()) } title='Increment' className='btn mx-1 px-4 btn-primary' >
                  <span>-</span>
                </a>
                <a onClick={ () => dispatch(incNumber()) } title='Decrement' className='btn mx-1 px-4 btn-primary' >
                  <span>+</span>
                </a>
              </div>
          </div>
        </section>
    </>
  )
}

export default App
