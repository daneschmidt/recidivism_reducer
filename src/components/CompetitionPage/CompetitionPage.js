import React, { Component } from 'react';
import Tracker from './ProgressionTracker/ProgressionTracker';
import Competitions from './CompetitionList/CompetitionList';

import Container from '@material-ui/core/Container';

class CompetitionPage extends Component {
  render() {
    return (
      <Container>
        <Tracker></Tracker>

        <Competitions />
      </Container>
    );
  }
}

export default CompetitionPage;
