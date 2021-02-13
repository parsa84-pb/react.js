import React, { useContext } from "react";

import SimpleContext from "../../context/SimpleContext";

const Header = () => {
    const context = useContext(SimpleContext);
    const { persons} = context;
    let badgePerson = [];
    if (persons.length >= 2) badgePerson.push("badge-success");
    if (persons.length == 1) badgePerson.push("badge-warning");
    if (persons.length == 0) badgePerson.push("badge-danger");
    return (
        // <SimpleContext.Consumer>
        // {(context) => (
        <div>
            <div className='alert alert-info'>
                <h1>مدریت کننده ی اشخاص</h1>
            </div>
            <h4 className='alert alert-light'>
                تعداد اشخاص{" "}
                <span className={`badge badge-pill ${badgePerson.join(" ")}`}>
                    {persons.length}
                </span>{" "}
                می باشد
            </h4>
        </div>
        // )}
        // </SimpleContext.Consumer>
    );
};

export default Header;
