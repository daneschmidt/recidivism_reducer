import React, { Component } from 'react';
import Tracker from './ProgressionTracker/ProgressionTracker';

import Container from '@material-ui/core/Container';

class CompetitionPage extends Component {
  render() {
    return (
      <Container>
        <Tracker></Tracker>
      </Container>
    );
  }
}

export default CompetitionPage;
