import React, { ChangeEventHandler } from 'react';

interface TextFieldProps {
    name?: string,
    label: string
    type?: string,
    errorText?: string,
    style?: React.CSSProperties,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value:string,
}

export default function TextField(props: TextFieldProps) {
    return (

        <div style={props.style}>
            <div className="form-group has-error has-feedback nm">
                <label className="custom_lebel">{props.label}</label>
                <input
                    name={props.name}
                    type={props.type}
                    className="form-control cfc"
                    onChange={props.onChange}
                    value={props.value}
                />
                <i className="glyphicon glyphicon-remove form-control-feedback"></i>
                {(props.errorText || '').length > 0 &&
                    <span
                        style={{ color: 'red' }}
                        className="help-block">{props.errorText}</span>
                }
            </div>
        </div>

    );
}
