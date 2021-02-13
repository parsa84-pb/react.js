// import React from "react";

// import React, { Component } from "react";

// class Person extends Component {
//     render() {
//         return <p>parsa bishe</p>;
//     }
// }

// export default Person;

import React from "react";

const Person = ({ firstname, lastname, age, children }) => {
    return (
        <div>
            <p>{` ${firstname} ${lastname} ${age}`}</p>
            <hr />
            <p>{children}</p>
            <hr />
        </div>
    );
};

export default Person;
