import React from "react";
import { Grid, Text, Image } from "../elements";
import Card from "../components/Card";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const Notification = (props) => {
  const user = useSelector((state) => state.user.user);
  const [noti, setNoti] = React.useState([]);

  React.useEffect(() => {
    if (!user) {
      return;
    }

    const notiDB = realtime.ref(`noti/${user.uid}/list`);

    const _noti = notiDB.orderByChild("insert_dt");

    _noti.once("value", (snapshot) => {
      if (snapshot.exists()) {
        let _data = snapshot.val();

        let _noti_list = Object.keys(_data)
          .reverse()
          .map((s) => {
            return _data[s];
          });

        console.log(_noti_list);
        setNoti(_noti_list);
      }
    });
  }, [user]);

  function notiCheck(post_id) {
    const notiDB = realtime.ref(`noti/${user.uid}`);

    // const _noti = notiDB.orderByChild("insert_dt");

    // _noti.once("value", (snapshot) => {
    //   if (snapshot.exists()) {
    //     let _data = snapshot.val();

    //     let _noti_list = Object.keys(_data)
    //       .reverse()
    //       .filter((s) => {
    //         if (s.id !== post_id) {
    //           return _data[s];
    //         }
    //       });

    //     console.log(_noti_list);
    //     setNoti(_noti_list);
    //   } else {
    notiDB.update({ read: true });
    // }
    // });
  }

  return (
    <React.Fragment>
      <Grid padding="16px" bg="#edf6e5">
        {noti.map((n, idx) => {
          return (
            <Card
              key={`noti_${idx}`}
              {...n}
              check={() => notiCheck(n.post_id)}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Notification;
