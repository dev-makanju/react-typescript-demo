type PesonListProps = {
   names: {
      first: string,
      last: string,
   }[]
}

const PersonList = (props: PesonListProps) => {
  return (
   <div>
      {props.names.map( item => (
         <h2 key={item.first} >{item.first} {item.last}</h2>
      ))}
   </div>
  )
}

export default PersonList