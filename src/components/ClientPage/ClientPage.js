import React from "react";
// import { connect } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Table from "../Table/Table";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);


export default function TableList() {
    const classes = useStyles();
    return (
        <GridContainer justify="center" paddingTop={12}>
            <GridItem xs={12} sm={12} md={10}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Client List</h4>
                        <p className={classes.cardCategoryWhite}>
                            Clients as of 2-12-2020
              </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["ID", "Name", "Salary", "Location"]}
                            tableData={[
                                ["1", "Dane Schmidt", "$136,738", "OP KS THO"],
                                ["2", "Grizzler Johnston", "$123,789", "KC MO YO"],
                                ["3", "Josh Wolf", "$156,142", "DOWN SOUTH"],
                                ["4", "Dad Lackus", "$138,735", "The Coffee Shop"],
                                ["5", "Luke YoMaMa", "$118,234", "In Front of the 16inch"],
                                ["6", "DUKE LUKE", "$17", "Fixing the database"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>

        </GridContainer>
    )
}



// class clientPage extends Component {
//     state = {
//         // heading: "Class Component",
//     };
//     //Dispatches to client.saga to GET full list of clients
//     componentDidMount() {
//         this.props.dispatch({
//             type: "GET_CLIENTS",
//         });
//     }
//     //Dispatches selected client id to profile.saga
//     goToProfile = id => {
//         console.log(id);
//         this.props.dispatch({
//             type: "GET_PROFILE",
//             payload: id,
//         });
//         //Navigates to profile page, will give all information on selected client
//         this.props.history.push("/profile/");
//     };

//     render() {
//         const clientList = this.props.store.clientReducer.map((item, index) => {
//             return (
//                 <div
//                     key={index}
//                     className="click-client"
//                     onClick={event => this.goToProfile(item.id)}
//                 >
//                     <h3>
//                         {item.firstName}
//                         {item.lastName}
//                         {item.email}
//                         {item.phoneNumber}
//                     </h3>
//                 </div>
//             );
//         });
//         return <div>{clientList}</div>;
//     }
// }

// export default connect(mapStoreToProps)(clientPage);
