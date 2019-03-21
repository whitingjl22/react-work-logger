import React from "react"

const Work = (props) => {
  return (
    <div>
      <h1>Work</h1>
      {props.work.array.map((item, idx) => {
        return (
          <p key={idx}>
            {item.minutes} - {item.description}
          </p>
        )
      })}
    </div>
  )
}

export default Work
