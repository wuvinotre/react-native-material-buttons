import React, { PureComponent } from "react";
import { Animated } from "react-native";

import RaisedButton from "../raised-button";
import { styles } from "./styles";

export default class RaisedTextButton extends PureComponent {
  static defaultProps = {
    titleColor: "rgb(66, 66, 66)",
    disabledTitleColor: "rgba(0, 0, 0, .26)",
  };

  constructor(props) {
    super(props);

    let { disabled, disableAnimation = new Animated.Value(disabled ? 1 : 0) } =
      this.props;

    this.state = {
      disableAnimation,
    };
  }

  render() {
    let { disableAnimation } = this.state;
    let { title, titleColor, titleStyle, disabledTitleColor, ...props } =
      this.props;

    let titleStyleOverrides = {
      color: disableAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [titleColor, disabledTitleColor],
      }),
    };

    return (
      <RaisedButton
        rippleColor={titleColor}
        shadeColor={titleColor}
        {...props}
        disableAnimation={disableAnimation}
      >
        <Animated.Text
          style={[styles.title, titleStyle, titleStyleOverrides]}
          numberOfLines={1}
        >
          {title}
        </Animated.Text>
      </RaisedButton>
    );
  }
}
