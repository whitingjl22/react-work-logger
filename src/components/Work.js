import React from "react"

const Work = (props) => {
  return (
    <div>
      <h1>Work</h1>
      {props.work.array
        .sort((a, b) => {
          return b.minutes - a.minutes
        })
        .map((item, idx) => {
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
