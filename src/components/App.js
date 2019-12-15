import React, { Component } from "react";
import {
  add_reminder,
  remove_reminder,
  clear_reminders
} from "../actions/index";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./logo.png";
import { connect } from "react-redux";
class App extends Component {
  state = {
    text: "",
    date: new Date()
  };

  render_reminders = () => {
    const reminders = this.props.reminders;
    return (
      <ul className="list-group">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.date)).fromNow()}</div>
              <div className="closeIcon btn btn-danger" onClick={() => this.props.remove_reminder(reminder.id)}>X</div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <img src={logo} alt="Dont forgot " />
        <div className="reminder-title">
          <h2> what would you do ya man </h2>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="enter your tasks "
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />

        <DatePicker
          className="form-control"
          value={this.state.date}
          selected={this.state.date}
          onChange={date => this.setState({ date: date })}
          showTimeSelect
          timeFormat="HH:mm"
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />

        <button
          className="btn btn-primary  btn-block"
          onClick={() => {
            this.props.add_reminder(this.state.text, this.state.date);
            this.setState({
              text: "",
              date: ""
            });
          }}
        >
          ADD reminder
        </button>
        {this.render_reminders()}
        <button
          className="btn btn-danger  btn-block"
          onClick={() => {
            this.props.clear_reminders();
          }}
        >
          {" "}
          clear reminder{" "}
        </button>
      </div>
    );
  }
}

/*function mapdispatchtoprops(dispatch){
return {
add_reminder:()=>dispatch(add_reminder())

}

} == */

/*function mapstatetoprops(state){
return {
reminders:state

}

}*/

export default connect(
  state => {
    return {
      reminders: state
    };
  },
  { add_reminder, remove_reminder, clear_reminders }
)(App);
