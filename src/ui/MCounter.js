import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  NativeModules
} from "react-native";
import React from "react";
import {
  change_name,
  change_pass,
  decreaseAction,
  increaseAction,
  updates_list
} from "../redux/action/CAction";
import { connect } from "react-redux";
import MColors from "../source/colors/Colors";

class MCounter extends React.Component {
  _mSaga() {}
  _login() {}
  render() {
    const {
      value,
      onIncreaseClick,
      onDecreaseClick,
      changeUsername,
      changePassword,
      password,
      username,
      activityList,
      info
    } = this.props;
    return (
      <View>
        <Text style={styles.title}>这是React-Redux</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={onIncreaseClick}>
            <Text style={styles.add}>增加</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{value}</Text>
          <TouchableOpacity onPress={onDecreaseClick}>
            <Text style={styles.reduce}>减少</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={() => this._mSaga()} title="saga" />
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={text => changeUsername(text)}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={text => changePassword(text)}
        />
        <Text>{password}</Text>
        <Text>{info}</Text>
        <Button title="Login" onPress={activityList} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: MColors.authOnGoing,
    height: 80,
    textAlign: "center"
  },
  container: {
    flexDirection: "row"
  },
  number: {
    color: MColors.authReject,
    marginLeft: 10
  },
  add: {
    color: MColors.authNotSubmit
  },
  reduce: {
    marginLeft: 10
  }
});

const mapStateToProps = state => {
  //alert(JSON.stringify(state));
  return {
    value: state.setCounter.count,
    username: state.setCounter.username,
    password: state.setCounter.password,
    info: state.setCounter.activityList
  };
};

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => {
    dispatch(increaseAction);
  },
  onDecreaseClick: () => dispatch(decreaseAction),
  changeUsername: text => {
    dispatch(change_name(text));
  },
  changePassword: text => {
    dispatch(change_pass(text));
  },
  activityList: () => {
    dispatch(updates_list);
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(MCounter);
