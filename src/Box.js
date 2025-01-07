import React, { forwardRef } from 'react'

const Box = forwardRef((props, ref) => {
    const { ...otherProps } = props;
    return (
        <div {...otherProps} >Box</div>
    )
});

export default Box;
