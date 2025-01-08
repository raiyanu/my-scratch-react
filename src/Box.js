import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react'

const Box = forwardRef((props, ref) => {
    const { ...otherProps } = props;
    const inputRef = useRef(null);
    const [tooltipPadding, setTooltipPadding] = useState(0)
    useLayoutEffect(() => {
        const { height } = inputRef.current.getBoundingClientRect();
        setTooltipPadding(height);
    }, []);
    return (
        <div {...otherProps} style={{ padding: tooltipPadding }} ref={inputRef}>Box</div>
    )
});

export default Box;
