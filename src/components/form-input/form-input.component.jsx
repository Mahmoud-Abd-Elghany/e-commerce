import React from 'react'
import './form-input.style.scss'

const FormInput = ({changeHandler, label, ...otherProps}) => {
    return (
        <div className="group">
            {
                label? 
                    (<label className= {`${otherProps.value.length? 'shrink': ''} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
            <input  className= "input"
                    {...otherProps}
                    onChange = {changeHandler}
            />
        </div>
    )
}

export default FormInput
