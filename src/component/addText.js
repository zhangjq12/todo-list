import React, { useState, useEffect, useCallback } from 'react';

const AddText = ({props, valuecallback}) => {

  const [isActive, setIsActive] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const [value, setValue] = useState('');

  const getValue = useCallback(() => {
    valuecallback(value);
  }, [value]);
  
  useEffect(() => {
    getValue();
  }, [value]);

  return (
    <input
      {...props}
      style={{
        width: '60%',
        height: '60px',
        borderColor: isActive || isHover ? 'rgb(0, 140, 255)' : 'lightgray',
        borderStyle: 'solid',
        boxShadow: '2px 2px rgba(0, 0, 0, 0.1)',
        fontSize: '32px',
        fontWeight: 'bold',
        borderRadius: '4px',
      }}
      onFocus={() => {
        setIsActive(true);
      }}
      onBlur={() => {
        setIsActive(false);
      }}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    >
    </input>
  )
}

export default AddText