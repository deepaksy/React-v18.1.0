import { useEffect } from 'react'

const ClassComponents = () => {
  useEffect(()=>{
    document.title="classComponent"
  })
  return (
    <div>ClassComponents</div>
  )
}

export default ClassComponents