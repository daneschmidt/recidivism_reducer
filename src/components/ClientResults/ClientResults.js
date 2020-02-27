import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import ClientSearchItem from '../ClientSearchItem/ClientSearchItem';
import { Link } from 'react-router-dom';

import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
import Card from '../Card/Card.js';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CardContent from '@material-ui/core/CardContent';

// import { makeStyles } from "@material-ui/core/styles";

// import GridItem from "../Grid/GridItem";
// import GridContainer from "../Grid/GridContainer";
// import Table from "../Table/Table";
// import Card from "../Card/Card";
// import CardHeader from "../Card/CardHeader";
// import CardBody from "../Card/CardBody";

// const styles = {
//     cardCategoryWhite: {
//         "&,& a,& a:hover,& a:focus": {
//             color: "rgba(255,255,255,.62)",
//             margin: "0",
//             fontSize: "14px",
//             marginTop: "0",
//             marginBottom: "0"
//         },
//         "& a,& a:hover,& a:focus": {
//             color: "#FFFFFF"
//         }
//     },
//     cardTitleWhite: {
//         color: "#FFFFFF",
//         marginTop: "0px",
//         minHeight: "auto",
//         fontWeight: "300",
//         fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//         marginBottom: "3px",
//         textDecoration: "none",
//         "& small": {
//             color: "#777",
//             fontSize: "65%",
//             fontWeight: "400",
//             lineHeight: "1"
//         }
//     }
// };

// const useStyles = makeStyles(styles);

// export default function TableList() {
//     const classes = useStyles();
//     return (
//         <GridContainer justify="center" paddingTop={12}>
//             <GridItem xs={12} sm={12} md={10}>
//                 <Card>
//                     <CardHeader color="primary">
//                         <h4 className={classes.cardTitleWhite}>Client List</h4>
//                         <p className={classes.cardCategoryWhite}>
//                             Clients as of 2-12-2020
//               </p>
//                     </CardHeader>
//                     <CardBody>
//                         <Table
//                             tableHeaderColor="primary"
//                             tableHead={["First Name", "Last Name", "Phone Number", "Email"]}
//                             tableData={[
//                                 ["1", "Dane Schmidt", "$136,738", "OP KS THO"],
//                                 ["2", "Grizzler Johnston", "$123,789", "KC MO YO"],
//                                 ["3", "Josh Wolf", "$156,142", "DOWN SOUTH"],
//                                 ["4", "Dad Lackus", "$138,735", "The Coffee Shop"],
//                                 ["5", "Luke YoMaMa", "$118,234", "In Front of the 16inch"],
//                                 ["6", "DUKE LUKE", "$17", "Fixing the database"]
//                             ]}
//                         />
//                     </CardBody>
//                 </Card>
//             </GridItem>

//         </GridContainer>
//     )
// }

class ClientResults extends Component {
	state = {
		heading: "Clients",
		search_string: '',
	};
	//Dispatches to client.saga to GET full list of clients
	componentDidMount() {
		this.props.dispatch({
			type: 'GET_CLIENTS',
		});
	}
	//Captures onChange event in the search field
	onChange = key => event => {
		this.setState(
			{
				...this.state,
				[key]: event.target.value
			}
		);
	};

	//Dispatches to client
	search = event => {
		this.props.dispatch({
			type: 'SEARCH_CLIENT',
			payload: { search_string: this.state.search_string }
		});
	};

	delete = event => {
		this.props.dispatch({
			type: 'DELETE_CLIENT',
			payload: {
				// this.state.isActive
			}
		})
	}


	//Dispatches selected client id to profile.saga
	goToProfile = (event, id) => {
		this.props.dispatch({
			type: 'GET_PROFILE',
			payload: { id }
		});
		//Navigates to profile page, will give all information on selected client
		this.props.history.push('/profilepage');
	};

	render() {
		// const clientResultList = this.props.store.clientSearch.map((item, index) => {
		// 	return (
		//         <ClientSearchItem key={index} client={item} />
		// 	);
		// });
		return (
			<GridContainer justify='center'>
				<GridItem xs={12} sm={12} md={9}>
					<Card>
						<Paper
							elevation={5}
							style={{
								backgroundColor: '#86949f',
								color: '#1a262a',
								padding: '30px'
							}}
						>
							<CardContent>
								<h2>{this.state.heading}</h2>

								<TextField
									style={{ marginBottom: '10px' }}
									variant='outlined'
									size='small'
									type='text'
									label='Enter Search'
									onChange={this.onChange('search_string')}
								/>
								<Link to='/clientresults'>
									<Button
										variant='contained'
										style={{
											marginBottom: '10px',
											marginLeft: '15px',
											backgroundColor: '#f0ad43',
											color: '#1a262a'
										}}
										variant='outlined'
										onClick={this.search}
									>
										SEARCH
                        </Button>
								</Link>
							</CardContent>

							<TableContainer component={Paper}>
								<Table>
									<TableHead
										style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
									>
										<TableRow>
											<TableCell style={{ color: '#b6c1cb' }}>
												<strong>Name</strong>
											</TableCell>
											<TableCell style={{ color: '#b6c1cb' }}>
												<strong>Phone</strong>
											</TableCell>
											<TableCell style={{ color: '#b6c1cb' }}>
												<strong>Email</strong>
											</TableCell>
											<TableCell style={{ color: '#b6c1cb' }}>
												<strong>Details</strong>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>{this.props.store.clientSearch.map((item, index) =>
										<TableRow key={index}>
											<TableCell>{item.firstName} {item.lastName}</TableCell>
											<TableCell>{item.phoneNumber}</TableCell>
											<TableCell>{item.email}</TableCell>
											<TableCell>
												<IconButton
													aria-label='info'
													size='small'
													// style={{ backgroundColor: '#f0ad43', color: '#384954' }}
													color='primary'
													onClick={event => this.goToProfile(event, item.id)}
												>
													<InfoIcon
													//  fontSize='small'
													/>
												</IconButton>
											</TableCell>
										</TableRow>
									)}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

export default connect(mapStoreToProps)(ClientResults);