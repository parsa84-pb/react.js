import React, { useContext,memo } from "react";
import Person from "./Person";
import SimpleContext from "./../../context/SimpleContext";
import Container from "../HOC/container";

const Persons = () => {
    const context = useContext(SimpleContext);
    return (
        // <SimpleContext.Consumer>
        // {(context) => (
        // <div>
        <Container>
            {context.persons.map((person) => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    personDelete={() => context.handleDeletePerson(person.id)}
                    change={(event) =>
                        context.handleChnageName(event, person.id)
                    }
                />
            ))}
        </Container> 
        // </div>
        // )}
        // </SimpleContext.Consumer>
    );
};

export default memo(Persons);
