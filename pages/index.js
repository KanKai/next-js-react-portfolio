import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor(props) {
    super(props);

    this.state = {
      title: "I am index page"
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  updateTitle = () => {
    this.setState({ title: "I am Update index page" });
  };

  render() {
    const { title } = this.state;
    const { initialData, userData } = this.props;
    return (
      <BaseLayout>
        <h1>I am Index Page from Class Component</h1>
        <h2> {title} </h2>
        <h2> {userData.title} </h2>
        <button onClick={this.updateTitle}> Update </button>
      </BaseLayout>
    );
  }
}

export default Index;
