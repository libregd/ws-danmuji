import React, { Component } from "react";

class FormValidation extends Component {
  state = {
    val: "",
    isValid: false
  };

  patternValidation = (val:string) => {
    return /^\D+$/g.test(val);
  };

  valChange = (event:any) => {
    const { value } = event.target;
    const isValid = this.patternValidation(value);

    this.setState({
        val: value,
      isValid
    });

    console.log(this.patternValidation(value))
  };

  onFormSubmit = () => {
    const { val } = this.state;
    console.log("Value: ", val);
  };

  render() {
    const { isValid, val } = this.state;
    return (
      <>
        <form
          onSubmit={(e) => {
            // 阻止默认的提交表单行为
            e.preventDefault();
            // 执行我们想要执行的事件
          }}
        >
        <div className="control columns mx-5">
         <div className="column is-8">
            <input
              type="text"
              name="val"
              value={val}
              className="input is-primary"
              onChange={this.valChange}
            />
            {this.state.isValid && (
              <div style={{ color: "red" }}>only number</div>
            )}
            </div>
            <div className="column is-2">
            <button className="button is-primary" >Submit</button>
            </div>
          </div>

        </form>

      </>
    );
  }
}

export default FormValidation;