import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

  constructor(props) {
    super(props)

    this.state = {
      title: 'I am index page'
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  updateTitle = () => {
    this.setState({ title: 'I am Update index page' })
  }

  render() {
    const { title } = this.state;

    return (
      <BaseLayout>
        <h1>I am Index Page from Class Component</h1>
        <h2> { title } </h2>
        <button onClick={ this.updateTitle }> Update </button>
      </BaseLayout>
    )
  }
}

export default Index;