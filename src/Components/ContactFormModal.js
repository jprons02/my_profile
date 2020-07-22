import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Contact from "./Contact";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";

const ContactFormModalComponent = (props) => {
  const [open1, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ background: "none", outline: 0 }}
        variant="outlined"
        color="primary"
        onClick={() => setOpen(true)}
      >
        CONTACT
      </Button>
      <Dialog maxWidth={false} onClose={() => setOpen(false)} open={open1}>
        <DialogTitle onClose={handleClose}>Send a message!</DialogTitle>
        <DialogContent dividers>
          <Contact closeModal={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactFormModalComponent;
