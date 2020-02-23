// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// CSS
import '../ModalTemplate/Modal.css'

class ModalTemplate extends Component {
    state = {
        setOpen: false,
    };

    openModal = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    closeModal = (event) => {
        this.setState({
            setOpen: false,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="modal-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openModal}
                    >
                        Open Modal
                    </Button>
                </div>
                <div>
                    <Modal
                        open={this.state.setOpen}
                        onClose={this.closeModal}>
                        <div className="modalPrime">
                            <h2>Modal</h2>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ModalTemplate);
