import React from "react";
import PropTypes from "prop-types";
// import "./person.css";

const Person = ({ fullname, personDelete, change }) => {
    return (
        <div className='card text-white bg-info w-25 mb-2 mt-3 mx-auto'>
            <div className='card-body text-center'>
                <p className='d-block'>{`${fullname}  `}</p>
                <div className='input-group justify-content-center'>
                    <input
                        className='form-control w-50'
                        type='text'
                        placeholder={fullname}
                        onChange={change}
                    />
                    <div className='input-group-prepend'>
                        <button
                            className='btn btn-danger fa fa-trash-o'
                            onClick={personDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
Person.propTypes = {
    fullname: PropTypes.string,
    personDelete: PropTypes.func,
    change: PropTypes.func,
};
export default Person;
