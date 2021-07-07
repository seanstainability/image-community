import React from "react";
import { Grid, Text, Button, Input } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Profile = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const { user_name } = useSelector((state) => state.user.user);

  const { history } = props;

  const [name, setName] = React.useState(user_name);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const editProfile = () => {
    dispatch(userActions.updateUserFB(name));
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 프로필을 수정할 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Button
        _onClick={() => {
          props.history.goBack();
        }}
        color="B5EAEA"
        width="10%"
        margin="4px"
      >
        ←
      </Button>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          내 정보 수정
        </Text>
      </Grid>

      <Grid padding="16px">
        <Input
          value={name}
          _onChange={changeName}
          label="닉네임"
          placeholder="바꿀 닉네임을 입력하세요"
        />
      </Grid>

      <Grid padding="16px">
        <Button text="내 정보 수정하기" _onClick={editProfile}></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
