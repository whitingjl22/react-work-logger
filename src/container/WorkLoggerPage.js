import React, { Component } from "react"
import Personal from "../components/Personal"
import Work from "../components/Work"

class WorkLoggerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      descriptionValid: false,
      minutes: "",
      minutesValid: false,
      personal: { array: [], totalMinutes: 0 },
      work: { array: [], totalMinutes: 0 },
      project: "Personal"
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value }, () => {
      if (this.state.description.length < 5) {
        this.setState({ descriptionValid: false })
      } else {
        this.setState({ descriptionValid: true })
      }
      if (parseInt(this.state.minutes) < 0 || parseInt(this.state.minutes) > 240 || this.state.minutes === "") {
        this.setState({ minutesValid: false })
      } else {
        this.setState({ minutesValid: true })
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let object = {
      description: this.state.description,
      minutes: this.state.minutes
    }
    if (this.state.project === "Personal") {
      this.state.personal.array.push(object)
      this.setState({ personal: this.state.personal })
    } else {
      this.state.work.array.push(object)
      this.setState({ work: this.state.work })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Work Logger</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Project{" "}
            <select id="project" onChange={this.handleChange}>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
          </label>
          <br />
          <label>
            Description <input id="description" type="text" onChange={this.handleChange} />{" "}
            {this.state.descriptionValid === false && this.state.description !== "" ? (
              <span>Description is not valid</span>
            ) : null}
          </label>
          <br />
          <label>
            Minutes <input id="minutes" type="number" onChange={this.handleChange} />{" "}
            {this.state.minutesValid === false && this.state.minutes !== "" ? <span>Minute entry is not valid</span> : null}
          </label>
          <br />
          <button disabled={!this.state.descriptionValid || !this.state.minutesValid}>Add</button>
        </form>
        <hr />
        <div className="work-area">
          <div className="personal">
            <Personal personal={this.state.personal} />
          </div>
          <div className="work">
            <Work work={this.state.work} />
          </div>
        </div>
      </div>
    )
  }
}

export default WorkLoggerPage
