import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  useStyles();
  const { onClose, selectedValue, open} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
             <iframe width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({link}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className="youTubeBtn">
          <img src="https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png" alt="" width="120" height="100"></img>
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} link={link}/>
    </div>
  );
}

