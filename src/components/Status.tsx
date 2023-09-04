type StatusProps = {
  status: 'loading' | 'success' | 'error',
}

const Status = (props: StatusProps) => {
   let message;
   if(props.status === 'loading'){
     message = 'loading...'
   }else if(props.status === 'success'){
      message = 'Data fetched successfully!'
   }else{
      message = 'Error fetching Data'
   }

   return (
    <div>
      <h2>Status---{message}</h2>
    </div>
   )
}

export default Status