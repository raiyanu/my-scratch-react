import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const SecuredBox = forwardRef((props, ref) => {
    const { ...otherProps } = props;
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            switchColor: function () {
                inputRef.current.style.background = inputRef.current.style.background === "red" ? "blue" : "red";
            }
        };
    }, []);
    return (
        <div {...otherProps} ref={inputRef} > Secured Box</div>
    )
});


export default SecuredBox;
