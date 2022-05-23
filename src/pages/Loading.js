import React from 'react'

const Loading = () => {
    const style = {
        loading:{
            textAlign:"center",
            fontWeight:"bolder"
        }
    }
  return (
    <div>
        <h1 style={style.loading}>Loading..........</h1>
    </div>
  )
}

export default Loading