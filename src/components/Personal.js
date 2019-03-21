import React from "react"

const Personal = (props) => {
  return (
    <div>
      <h1>Personal</h1>
      {props.personal.array
        .sort((a, b) => {
          return b.minutes - a.minutes
        })
        .map((item, idx) => {
          return (
            <div key={idx}>
              <div>{props.personal.totalMinutes}</div>
              <p>
                {item.minutes} - {item.description}
              </p>
            </div>
          )
        })}
    </div>
  )
}

export default Personal
