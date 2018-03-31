import React from 'react';
import ProgressTracker from './ProgressTracker';
import PitchTester from './PitchTester';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'fakeusername',
      progress: ['really flat', 'right on', 'a little sharp'],
    };
  }

  render() {
    return (
      <div>
        <ProgressTracker progressArray={this.state.progress} />
        <PitchTester />
        <div className="submit-results">ResultSubmit will go here</div>
      </div>
    );
  }
}

export default App;
