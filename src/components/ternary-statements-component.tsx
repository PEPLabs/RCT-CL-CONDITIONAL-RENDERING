import React, { useState } from 'react';


interface MyProps {
    myBoolProp: boolean;
}


const TernaryStatementsComponent: React.FC<MyProps> = (props: MyProps) => {


    return (
        <React.Fragment>
            <h4>Ternary Statements Component w/ myBoolProp = {"" + props.myBoolProp}</h4>

            {/* Here is an example of you display props data. */}
            {props.myBoolProp ? <p>Demo of conditional rendering, boolean is true</p> : <p>Demo of conditional rendering, boolean is false</p>}

            {/* TODO:  here, if myBoolProp is true then a p tag with "successful success" should be rendered, otherwise a p tag with "successful failure" should be rendered.*/}
            {/* CODE HERE */}

        </React.Fragment>
    );
}

export default TernaryStatementsComponent;