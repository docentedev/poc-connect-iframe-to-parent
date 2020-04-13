import React, { useState } from 'react';
import './App.css';

function App() {

  const [modalResult, setModalResult] = useState(null);

  const handlerModal = function () {
    window.parent.postMessage({
      type: 'ui-modal__send',
      payload: 'Esta seguro que desea hacer esto?',
    }, "*")
  };

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {
    if (event.data.type === 'ui-modal__receive') {
      setModalResult(event.data.payload);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handlerModal}>Abrir modal pregunta</button>
        {modalResult !== null && (modalResult ? 'OK' : 'NOK')}
      </header>
    </div>
  );
}

export default App;
