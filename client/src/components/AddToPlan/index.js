import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box, Divider, Typography, Button, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useHistory } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";

export default function FormDialogComp(props) {
  const [validation, setValidation] = useState("");
  const { data, open, handleClose } = props;
  const [plan, setPlan] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [newPlan, setNewPlan] = useState("");
  const auth = useContext(AuthContext);
  const history = useHistory();
  const userId = auth.userId;
  const keys = data && Object.keys(data);
  const col_name = keys ? keys[0] : [];

  // useEffect(() => {
  if (Object.keys(plan).length === 0 && open) {
    axios({
      method: "POST",
      url: `${BACKEND_URL}/pt/findPlanTripByUserID/` + userId,
    }).then((res) => {
      setPlan(res.data);
    });
  }
  // }, []);

  const clearAll = () => {
    setNewPlan("");
    setValidation("");
    setPlan("");
  };

  const handleAdd = () => {
    if (newPlan) {
      if (!newPlan.match(/^[-\w\s]+$/)) {
        setValidation("Only Alpha Numeric and Underscore is Allowed");
        return;
      }
      axios
        .post(`${BACKEND_URL}/pt/createPlanTrip`, {
          plan_name: newPlan,
          userID: userId,
          [col_name]: data[col_name],
        })
        .then((res) => {
          clearAll();
          history.push("/userdashboard-plans");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${BACKEND_URL}/pt/updatePlan`, {
          plan_id: selectedPlan,
          [col_name]: data[col_name],
        })
        .then((res) => {
          clearAll();
          history.push("/userdashboard-plans");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleNewPlan = (e) => {
    setValidation("");
    setNewPlan(e.target.value);
  };

  const displayDialog = () => {
    return (
      <>
        <Box pl={4} pr={4}>
          <Typography variant="body2">Choose Existing plan</Typography>
          <Select
            id="demo-simple-select"
            value={selectedPlan}
            label="select"
            placeholder="Choose a plan"
            onChange={handleChange}
            fullWidth={true}
          >
            {plan.length !== 0 &&
              plan.map((item) => {
                return (
                  <MenuItem key={item.plan_id} value={item.plan_id}>
                    {item.plan_name} - {item.city}
                  </MenuItem>
                );
              })}
          </Select>
        </Box>
        <Box pt={3} pl={2} pr={2} display="inline-flex" width="100%">
          <Box width="45%" pt={1}>
            <Divider />
          </Box>
          <Box width="10%">
            <Typography variant="body1" color="grey" textAlign="center">
              OR
            </Typography>
          </Box>

          <Box width="45%" pt={1}>
            <Divider />
          </Box>
        </Box>
        <Box pt={3} pl={4} pr={4}>
          <TextField
            fullWidth
            id="plan name"
            label="Enter Plan Name"
            name="plan name"
            color="secondary"
            disabled={selectedPlan !== 0}
            value={newPlan}
            onChange={handleNewPlan}
            autoComplete="plan name"
          />
        </Box>
      </>
    );
  };
  return (
    <Box>
      <Dialog fullWidth="70%" open={open} onClose={handleClose}>
        <DialogTitle>Add to Plan</DialogTitle>
        <DialogContent>
          <Box pb={2}>
            <Divider />
          </Box>
          {validation && (
            <Box pb={4}>
              <Alert severity="error">{validation}</Alert>
            </Box>
          )}
          {displayDialog()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            variant="contained"
            disabled={!(newPlan || selectedPlan)}
          >
            Add Plan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
