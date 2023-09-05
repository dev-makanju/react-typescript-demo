import React from 'react'
type inputProps = {
   value?: string,
   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
   styles: React.CSSProperties, 
}

const Input = (props: inputProps) => {
  return (
    <input style={props.styles} type="text" value={props.value} onChange={props.handleChange}/>
  )
}

export default Input