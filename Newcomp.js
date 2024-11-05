import React , {memo} from 'react'


const Newcomp = (props) => {
  //console.log("newComp render",props.newCount)
  console.log("newComp render");
  return (
    <div>
        <h1>hello {props.newCount}</h1>
    </div>
  )
}

export default memo(Newcomp);