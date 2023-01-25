import Section  from "./Section"
import React from "react"
import Section2 from "./Section2"

export default function Home(): JSX.Element{
  return(
    <div className="container">
      <Section/>
      <Section2/>
    </div>
  )
}
//ts vs tsx