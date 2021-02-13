import React, { Component } from "react";
// import React from "react";

import Person from "./components/Person";
import "./App.css";

class App extends Component {
    //     constructor() {
    //         super();
    // this.handelPersonChenger = this.handelPersonChenger.bind(this);
    // this.state = {
    //     persons: [
    //         { firstname: "parsa0", lastname: "bishe0", age: 15 },
    //         { firstname: "parsa1", lastname: "bishe1", age: 11 },
    //         { firstname: "parsa2", lastname: "bishe2", age: 12 },
    //         { firstname: "parsa3", lastname: "bishe3", age: 13 },
    //         { firstname: "parsa4", lastname: "bishe4", age: 14 },
    //         { firstname: "parsa5", lastname: "bishe5", age: 16 },
    //     ],
    // };
    // }

    state = {
        persons: [
            { firstname: "parsa0", lastname: "bishe0", age: 15 },
            { firstname: "parsa1", lastname: "bishe1", age: 11 },
            { firstname: "parsa2", lastname: "bishe2", age: 12 },
            { firstname: "parsa3", lastname: "bishe3", age: 13 },
            { firstname: "parsa4", lastname: "bishe4", age: 14 },
            { firstname: "parsa5", lastname: "bishe5", age: 16 },
        ],
    };

    // handelPersonChenger() {
    //     this.setState ( {
    //         persons: [
    //             { firstname: "parsa01", lastname: "bishe0", age: 15 },
    //             { firstname: "parsa12", lastname: "bishe1", age: 11 },
    //             { firstname: "parsa23", lastname: "bishe2", age: 12 },
    //             { firstname: "parsa34", lastname: "bishe3", age: 13 },
    //             { firstname: "parsa45", lastname: "bishe4", age: 14 },
    //             { firstname: "parsa56", lastname: "bishe5", age: 16 },
    //         ],
    //     });
    // }

    handelPersonChenger = () => {
        this.setState({
            persons: [
                { firstname: "parsa01", lastname: "bishe0", age: 15 },
                { firstname: "parsa12", lastname: "bishe1", age: 11 },
                { firstname: "parsa23", lastname: "bishe2", age: 12 },
                { firstname: "parsa34", lastname: "bishe3", age: 13 },
                { firstname: "parsa45", lastname: "bishe4", age: 14 },
                { firstname: "parsa56", lastname: "bishe5", age: 16 },
            ],
        });
    };

    render() {
        return (
            <div className='App'>
                <h1>hello world</h1>
                {this.state.persons.map((person) => (
                    <Person
                        firstname={person.firstname}
                        lastname={person.lastname}
                        age={person.age}
                    >
                        nanegholi
                    </Person>
                ))}
                <button onClick={this.handelPersonChenger}>Click Me</button>
            </div>
        );
    }
}
export default App;

// const App = () => {
//     return (
//         <div className='App'>
//             <h1>hello world</h1>
//             <button disabled>Click Me!!!</button>
//             <Person firstname='parsa' lastname='bishe' age='15' />
//         </div>
//     );
// };

// export default App;
