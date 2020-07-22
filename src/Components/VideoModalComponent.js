import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const VideoModalComponent = (props) => {
  const [open1, setOpen1] = React.useState(false);

  return (
    <div>
      <Button
        style={{ border: "none", background: "none", outline: 0 }}
        variant="outlined"
        color="primary"
        onClick={() => setOpen1(true)}
      >
        <img
          alt="play-icon"
          style={{ cursor: "pointer" }}
          width="130px"
          src="/images/playvideo_arrow.png"
        />
      </Button>

      <Dialog
        maxWidth={false}
        onClose={() => setOpen1(false)}
        aria-labelledby="simple-dialog-title"
        open={open1}
      >
        <video
          width="100%"
          controls
          src={props.videoPath}
          poster=""
          autoPlay={true}
        >
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can <a href={props.videoPath}>download it</a>
          and watch it with your favorite video player!
        </video>
      </Dialog>
    </div>
  );
};

export default VideoModalComponent;
