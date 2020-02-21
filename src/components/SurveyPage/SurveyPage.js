import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import ChartistGraph from 'react-chartist';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

// import Swal from 'sweetalert2';

import {
  completedTasksChart,
  emailsSubscriptionChart
} from '../../variables/charts';

class SurveyPage extends Component {
  render() {
    return (
      <Container>
        <Card
          style={{
            marginBottom: '30px',
            width: '100%'
          }}
        >
          <CardContent
            style={{
              padding: '15px',
              width: '100%'
            }}
          >
            <TextField
              onChange={event => this.changeField(event, 'step1')}
              style={{ margin: '3px' }}
              label='Enter Event Name'
              variant='outlined'
              size='small'
            ></TextField>
            <TextField
              onChange={event => this.changeField(event, 'step2')}
              style={{ margin: '3px' }}
              label='Enter Step two'
              variant='outlined'
              size='small'
            ></TextField>
            <TextField
              onChange={event => this.changeField(event, 'step3')}
              style={{ margin: '3px' }}
              label='Enter Step Three'
              variant='outlined'
              size='small'
            ></TextField>

            <TextField
              onChange={event => this.changeField(event, 'step4')}
              style={{ margin: '3px' }}
              label='Enter Step Four'
              variant='outlined'
              size='small'
            ></TextField>
            <TextField
              onChange={event => this.changeField(event, 'step5')}
              style={{ margin: '3px' }}
              label='Enter Step Five'
              variant='outlined'
              size='small'
            ></TextField>

            <TextField
              onChange={event => this.changeField(event, 'step6')}
              style={{ margin: '3px' }}
              label='Enter Step Six'
              variant='outlined'
              size='small'
            ></TextField>
            <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                margin: '3px',
                display: 'inline-block'
              }}
              onClick={this.submit}
            >
              Add Survey
            </Button>
            <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                marginLeft: '14px',
                display: 'inline-block'
              }}
              onClick={this.handleClose}
            >
              Cancel
            </Button>
          </CardContent>
        </Card>

        <div style={{ display: 'flex' }}>
          <Card
            style={{
              flex: '1',
              marginRight: '10px'
            }}
          >
            <CardContent>
              <ChartistGraph
                style={{
                  width: '100%',
                  marginLeft: '1rem',
                  marginTop: '1rem',
                  marginBottom: '1rem'
                }}
                className='ct-chart'
                data={completedTasksChart.data}
                type='Line'
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardContent>
          </Card>
          <Card style={{ flex: '1', marginRight: '10px' }}>
            <CardContent>
              <ChartistGraph
                style={{
                  width: '100%',
                  marginLeft: '1rem',
                  marginTop: '1rem',
                  marginBottom: '1rem'
                }}
                className='ct-chart'
                data={completedTasksChart.data}
                type='Line'
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardContent>
          </Card>
          <Card style={{ flex: '1' }}>
            <CardContent>
              <ChartistGraph
                style={{
                  width: '100%',
                  marginLeft: '1rem',
                  marginTop: '1rem',
                  marginBottom: '1rem'
                }}
                className='ct-chart'
                data={emailsSubscriptionChart.data}
                type='Bar'
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardContent>
          </Card>
        </div>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(SurveyPage);
