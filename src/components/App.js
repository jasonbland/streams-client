import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      {/* bad technique */}
      <a href="/pagetwo">Navigate to Page Two</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      {/* bad technique */}
      <a href="/">Navigate to Page One</a>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
