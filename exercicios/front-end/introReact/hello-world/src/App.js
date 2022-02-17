import React from "react";

const Task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

function App() {
  return (
    <>
      <h1> Lista de Tarefas</h1>
      <ol>
        {Array.of('estudar react', 'lavar louça', 'fazer projeto', 'tentar sobreviver')
         .map((element, index) => Task(element, index))}
    </ol>
    </>
  );
}

export default App;
