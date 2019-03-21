import React from "react"

const Personal = (props) => {
  return (
    <div>
      <h1>Personal</h1>
      {props.personal.array.map((item, idx) => {
        return (
          <p key={idx}>
            {item.minutes} - {item.description}
          </p>
        )
      })}
    </div>
  )
}

export default Personal
