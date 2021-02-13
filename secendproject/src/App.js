import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/common/Header";
import Container from "./components/HOC/container";
import NewPerson from "./components/person/NewPerson";
import Persons from "./components/person/Pesrsons";
import SimpleContext from "./context/SimpleContext";

const App = () => {
    // state = {
    //     persons: [],
    //     person: "",
    //     showPersons: true,
    //     title: "مدریت کننده اشخاص",
    // };

    const [getPersons, setPersons] = useState([]);
    const [getSinglePersons, setSinglePersons] = useState("");
    const [getShowPersons, setShowPersons] = useState(true);

    const showPersonshandeler = () => {
        setShowPersons(!getShowPersons);
    };
    const handleDeletePerson = (id) => {
        //filter
        const persons = [...getPersons];
        const filteredPersons = persons.filter((p) => p.id !== id);
        setPersons(filteredPersons);

        const personIndex = persons.findIndex((p) => p.id === id);
        const person = persons[personIndex];
        toast.error(`${person.fullname}  با موفقیت به فنا رفت`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const handleChnageName = (event, id) => {
        const allPersons = getPersons;
        const personIndex = allPersons.findIndex((p) => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];
        persons[personIndex] = person;
        setPersons(persons);
    };
    const handleNewPerson = () => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: getSinglePersons,
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            setPersons(persons);
            setSinglePersons("");

            toast.success("شخصی با موفقیت اضافه شد.", {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true,
            });
        }
    };

    const setPerson = (event) => {
        setSinglePersons(event.target.value);
    };
    let person = null;

    if (getShowPersons) {
        person = <Persons />;
    }
    return (
        <SimpleContext.Provider
            value={{
                persons: getPersons,
                person: getSinglePersons,
                handleChnageName: handleChnageName,
                handleDeletePerson: handleDeletePerson,
                handleNewPerson: handleNewPerson,
                setPerson: setPerson,
            }}
        >
            {/* <div className='rtl text-center'> */}
            <Container classes='rtl text-center'>
                <Header />
                <NewPerson />
                <button
                    onClick={showPersonshandeler}
                    className={
                        getShowPersons ? "btn btn-success" : "btn btn-danger"
                    }
                >
                    نمایش اشخاص
                </button>
                {person}
                <ToastContainer />
            </Container> 
            {/* </div> */}
        </SimpleContext.Provider>
    );
};
export default App;

// class App extends Component {
//     state = {
//         persons: [],
//         person: "",
//         showPersons: true,
//         title: "مدریت کننده اشخاص",
//     };
//     showPersonshandeler = () => {
//         this.setState({ showPersons: !this.state.showPersons });
//         console.log(this.state.showPersons);
//     };
//     handleDeletePerson = (id) => {
//         //filter
//         const persons = [...this.state.persons];
//         const filteredPersons = persons.filter((p) => p.id !== id);
//         this.setState({ persons: filteredPersons });

//         const personIndex = persons.findIndex((p) => p.id === id);
//         const person = persons[personIndex];
//         toast.error(`${person.fullname}  با موفقیت به فنا رفت`, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//     };
//     handleChnageName = (event, id) => {
//         const { persons: allPersons } = this.state;
//         const personIndex = allPersons.findIndex((p) => p.id === id);
//         const person = allPersons[personIndex];
//         person.fullname = event.target.value;
//         console.log(event);

//         const persons = [...allPersons];
//         persons[personIndex] = person;
//         this.setState({ persons });
//     };
//     handleNewPerson = () => {
//         const persons = [...this.state.persons];
//         const person = {
//             id: Math.floor(Math.random() * 1000),
//             fullname: this.state.person
//         };

//         if (person.fullname !== "" && person.fullname !== " ") {
//             persons.push(person);
//             this.setState({ persons, person: "" });

//             toast.success("شخصی با موفقیت اضافه شد.", {
//                 position: "bottom-right",
//                 closeButton: true,
//                 closeOnClick: true
//             });
//         }
//     };

//     setPerson = event => {
//         this.setState({ person: event.target.value });
//     };

//     render() {
//         const { persons, showPersons } = this.state;
//         let person = null;

//         if (showPersons) {
//             person = (
//                 <Persons
//                     persons={persons}
//                     delete={this.handleDeletePerson}
//                     changePerson={this.handleChnageName}
//                 />
//             );
//         }
//         return (
//             <SimpleContext.Provider
//                 value={{
//                     state: this.state,
//                     handleChnageName: this.handleChnageName,
//                     handleDeletePerson: this.handleDeletePerson,
//                     handleNewPerson: this.handleNewPerson,
//                     setPerson: this.setPerson,
//                 }}
//             >
//                 <div className='rtl text-center'>
//                     <Header />
//                     <NewPerson />
//                     <button
//                         onClick={this.showPersonshandeler}
//                         className={
//                             showPersons ? "btn btn-success" : "btn btn-danger"
//                         }
//                     >
//                         نمایش اشخاص
//                     </button>
//                     {person}
//                     <ToastContainer />
//                 </div>
//             </SimpleContext.Provider>
//         );
//     }
// }

// export default App;
