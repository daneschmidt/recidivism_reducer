import React, { Component } from 'react';
import Competitions from './CompetitionList/CompetitionList';
import KanbanLists from '../CompetitionPage/ProgressionTracker/ProgressionTracker';

import Container from '@material-ui/core/Container';

class CompetitionPage extends Component {
  render() {
    return (
      <Container>
        <KanbanLists />

        <Competitions />
      </Container>
    );
  }
}

export default CompetitionPage;
