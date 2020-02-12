import React from "react";

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
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    {/* <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Client List</h4>
                        <p className={classes.cardCategoryWhite}>
                            Below is a list of clients
                  </p>
                    </CardHeader> */}
                    <CardBody>
                        <Table
                            tableHeaderColor="secondary"
                            tableHead={["Name", "Country", "City", "Salary"]}
                            tableData={[
                                ["Duke Lucke", "Niger", "Oud-Turnhout", "$36,738"],
                                ["Daddy Lackus", "Curaçao", "Sinaai-Waas", "$23,789"],
                                ["Lone Wolf", "Netherlands", "Baileux", "$56,142"],
                                ["Luke Ma", "Korea, South", "Overland Park", "$38,735"],
                                ["Dane Schmidt", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                ["Grizzler Johnston", "Chile", "Gloucester", "$78,615"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}

