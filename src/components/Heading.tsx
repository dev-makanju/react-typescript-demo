type childrenProps = {
   children: string,
}

const Heading = (props: childrenProps) => {
   return (
     <div>
        {props.children}
     </div>
   )
}

export default Heading