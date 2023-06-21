import React, { useState } from 'react';


interface MyProps {
    myBoolProp: boolean;
}


const ElementsAsVariablesComponent: React.FC<MyProps> = (props: MyProps) => {

    let demoElement;
    let todoElement;

    /* Here is an example of how you conditionally render elements using variables holding entire elements. */
    if (props.myBoolProp) {
        demoElement = <p className="youCanHaveAttributesAsWell">Demo of conditional rendering, boolean is true</p>
    } else {
        demoElement = <p className="youCanHaveAttributesAsWell">Demo of conditional rendering, boolean is false</p>
    }

    /* TODO:  render the "todoElement" variable directly underneath the "demoElement" variable. If myBoolProp is true then a p tag with "successful success" should be rendered, otherwise
    a p tag with "successful failure" should be rendered.*/

    /* CODE HERE */


    return (
        <React.Fragment>
            <h4>Elements As Variables Component w/ myBoolProp = {"" + props.myBoolProp}</h4>

            {demoElement}
            
            {/* TODO: Render the todoElement here */}
        </React.Fragment>
    );
}

export default ElementsAsVariablesComponent;