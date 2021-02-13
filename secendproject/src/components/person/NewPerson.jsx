import React, { useContext, useRef, useEffect } from "react";
import SimpleContext from "./../../context/SimpleContext";

const NewPerson = () => {
    const focusInput = useRef(null);
    const context = useContext(SimpleContext);
    useEffect(()=> {
        focusInput.current.focus()
    })
    return (
        <div className='m-2 p-2'>
            <form
                className='form-inline justify-content-center'
                onSubmit={(event) => event.preventDefault()}
            >
                <div className='input-group w-20'>
                    <input
                        ref={focusInput}
                        type='text'
                        placeholder='اسم بهم بده'
                        className='form-control'
                        onChange={context.setPerson}
                        value={context.person}
                    />
                    <div className='input-group-prepend'>
                        <button
                            onClick={context.handleNewPerson}
                            className='btn btn-success fa fa-plus-square'
                            type='submit'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewPerson;
