import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="my-3" >
            <label htmlFor={field.name}>{label}</label>
            <Field
                className={`text-input w-100  ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
            // autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} style={{ color: "red" }} />
        </div>
    )
}