type GreetProps = {
   name: string
   messageCount?: number,
   isLoggedIn: boolean,
}



const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
       { props.isLoggedIn ? `${props.name}! hello , you're ${messageCount}` : 'welcome guest'} 
    </div>
  )
}

export default Greet