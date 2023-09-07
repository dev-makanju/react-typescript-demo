import React from 'react'


// use generics to allow list array to accept any type
type ListProps<T> = {
   items: T[],
   onClick: (value: T) => void
}

const List = <T extends number | string>({items, onClick}: ListProps<T>) => {
   return (
     <div>
        <h2>List of items</h2>
        {
            items.map((item, index) => {
               return (
                 <div key={index} onClick={() => onClick(item)}>
                  {item}
                 </div>
               )
            })
        }
     </div>
   )
}

export default List