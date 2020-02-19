import React, { Component } from 'react';
import Competitions from './CompetitionList/CompetitionList';
import Progression from '../CompetitionPage/ProgressionTracker/ProgressionTracker';

import Container from '@material-ui/core/Container';

class CompetitionPage extends Component {
  render() {
    return (
      <Container>
        <Progression />

        <Competitions />
      </Container>
    );
  }
}

export default CompetitionPage;
