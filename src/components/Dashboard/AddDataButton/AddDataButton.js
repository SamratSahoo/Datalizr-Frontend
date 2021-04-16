import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import FormElement from "../../CreatePage/FormElement/FormElement";
import "./AddDataButton.css";

export default function AddDataButton(props) {
  const [open, setOpen] = React.useState(false);
  const [fields, setField] = React.useState([]);
  const refArray = [];

  const handleClickOpen = () => {
    setOpen(true);
    getFields();
  };

  const handleRef = () => {
    var reference = React.createRef();
    refArray.push(reference);
    return reference;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    const api_url = process.env.REACT_APP_API_LOCAL + "addData";
    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    var columnsToAppend = [];
    refArray.map((reference) =>
      columnsToAppend.push(reference.current.state.keyElement)
    );
    const dataToSend = {
      fileId: props.datasetId,
      fileType: props.fileType,
      columnsToAppend: columnsToAppend,
      userId: localStorage.getItem("id"),
    };
    axios.post(api_url, dataToSend, headersUse).then((res) => {
      console.log(res);
    });
  };

  const getFields = () => {
    const api_url = process.env.REACT_APP_API_LOCAL + "getDatasets";
    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const dataToSend = { datasetId: props.datasetId };
    axios.post(api_url, dataToSend, headersUse).then((res) => {
      setField(res.data.fields);
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Data
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="pop-up-container"
      >
        <DialogTitle id="form-dialog-title">Add Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This dataset is looking for the following fields:
          </DialogContentText>
          <div className="form-element-contain">
            {fields.map((field, index) => (
              <FormElement
                autoFocus
                margin="dense"
                placeholder={field}
                fullWidth
                ref={handleRef()}
                key={index}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Data
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
