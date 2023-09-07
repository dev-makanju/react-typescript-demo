import React from 'react';

type ButtonsProps = {
   variant: 'primary'| 'secondary'
} & React.ComponentProps<'button'>

const Button = ({ variant, children, ...rest }: ButtonsProps ) => {
   return (
      <button className={`class-with-${variant}`} {...rest}>Label</button>
   )
}

export default Button