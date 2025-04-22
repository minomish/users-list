import { useEffect, useState } from 'react'

export default function Loader() {

  const [text, setText] = useState("")
  const [showImg, setShowImg] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setText( "3 sec" )
    }, 3000)
  }, [])

  return (
    <div>
      {
          showImg ? (
              <img src="./spinner.svg" alt="" />
          ) : (
              <h3>{text}</h3>
          )
      }
    </div>
  )
}


