import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in React"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];

class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    console.log(this.fb);
    let options = {
      formData: formData,
      onSave: function(formData) {
        // toggleEdit();
        console.log(formBuilder.formData);
        $(".render-wrap").formRender({ formData });
        localStorage.setItem("formData", JSON.stringify(formData));
      }
    };

    var fbEditor = this.fb.current;
    var formBuilder = $(fbEditor).formBuilder(options);
  }

  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}

ReactDOM.render(<FormBuilder />, document.getElementById("root"));
