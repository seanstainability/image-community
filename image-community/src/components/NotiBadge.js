import React from "react";
// import { Badge } from "@material-ui/core";
import { Button } from "../elements";
import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const [is_read, setIsRead] = React.useState(true);
  const user_id = useSelector((state) => state.user.user.uid);

  // const notiCheck = () => {
  //   const notiDB = realtime.ref(`noti/${user_id}`);
  //   notiDB.update({ read: true });
  //   return props._onClick;
  // };

  React.useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);

    notiDB.on("value", (snapshot) => {
      console.log("is_noti", snapshot.val());
      setIsRead(snapshot.val().read);
    });

    return () => notiDB.off();
  }, []);

  return (
    <React.Fragment>
      <Button
        margin={props.margin}
        invisible={is_read}
        _onClick={props._onClick}
        text="알림"
      ></Button>
    </React.Fragment>
  );
};

NotiBadge.defaultProps = {
  margin: false,
  _onClick: () => {},
};

export default NotiBadge;
