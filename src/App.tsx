import React from 'react';
import logo from './logo.svg';
import './App.css';
import TernaryStatementsComponent from './components/ternary-statements-component';
import ElementsAsVariablesComponent from './components/elements-as-variables-component';

function App() {
  return (
    <div className="App">
      <p>When creating fully feature front-end applications you sometimes need to show or hide elements of the web page depending on what data you have available.
        This concept is referred to as "conditional rendering".</p>
      <p>In this lab, let's explore how to render TSX based on a boolean value. Take a look at the TSX files for each component; each component demonstrate a slightly
        different technique for conditional rendering.
      </p>


      <div className="section-container">
        <h2>Conditional Rendering w/ Ternary Statements</h2>
        <p>Here let's take a look at how you can use statements to choose how a component renders.</p>

        <div className="todo-container">
          <TernaryStatementsComponent myBoolProp={true}></TernaryStatementsComponent>
          <TernaryStatementsComponent myBoolProp={false}></TernaryStatementsComponent>
        </div>

      </div>

      <div className="section-container">
        <h2>Conditional Rendering w/ Elements as Variables</h2>
        <p>Here let's take a look at how you can store elements as variables to clean up complex conditional rendering syntax.</p>

        <div className="todo-container">
          <ElementsAsVariablesComponent myBoolProp={true}></ElementsAsVariablesComponent>
          <ElementsAsVariablesComponent myBoolProp={false}></ElementsAsVariablesComponent>
        </div>

      </div>

      <div>
        <a href="https://react.dev/learn/conditional-rendering">https://react.dev/learn/conditional-rendering</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try conditionally rendering a component by putting entire return statements
      into if statements.*/}
    </div>
  );
}

export default App;
