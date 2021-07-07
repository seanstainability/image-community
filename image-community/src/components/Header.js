import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

import NotiBadge from "./NotiBadge";
import { red } from "@material-ui/core/colors";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const user_name = useSelector((state) => state.user.user?.user_name);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log("is_session", is_session);

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              <i
                class="fas fa-heartbeat"
                style={{ color: "#F38BA0", "font-size": "xx-large" }}
                onClick={() => {
                  history.push("/");
                }}
              ></i>
              {/* &nbsp;<span>{user_name}</span> */}
            </Text>
          </Grid>

          <Grid is_flex>
            <Button
              text={`${user_name}님의 정보`}
              margin="4px"
              _onClick={() => {
                history.push("/profile");
              }}
            ></Button>

            <NotiBadge
              margin="4px"
              _onClick={() => {
                history.push("/noti");
              }}
            />
            <Button
              text="로그아웃"
              margin="4px"
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            <i
              class="fas fa-heartbeat"
              style={{ color: "#F38BA0", "font-size": "xx-large" }}
              onClick={() => {
                history.push("/");
              }}
            ></i>
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            margin="4px"
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            margin="4px"
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
