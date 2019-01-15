import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  NativeModules
} from "react-native";
import React from "react";
import { decreaseAction, increaseAction } from "../redux/action/CAction";
import { connect } from "react-redux";
import MColors from "../source/colors/Colors";
class MCounter extends React.Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props;
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
const mapStateToProps = state => ({
  value: state.count
});

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increaseAction),
  onDecreaseClick: () => dispatch(decreaseAction)
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(MCounter);
