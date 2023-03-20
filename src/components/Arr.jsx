import React from 'react'
function Arr() {
    var numbers=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <ul>
        {numbers.map((value,index)=>{
            return <li key={index}>{value}</li>})}
      </ul>
    </div>
  )
}

export default Arr
