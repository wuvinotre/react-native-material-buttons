import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import RaisedButton from '../raised-button';
import { styles } from './styles';

export default class RaisedTextButton extends PureComponent {
  static defaultProps = {
    titleStyle: {},
    titleColor: 'rgb(66, 66, 66)',
    disabledTitleColor: 'rgba(0, 0, 0, .26)',
  };

  static propTypes = {
    ...RaisedButton.propTypes,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string,
    disabledTitleColor: PropTypes.string,
  };

  render() {
    let { title, titleColor, disabledTitleColor, titleStyle, ...props } = this.props;
    let { disabled } = this.props;

    let titleStyle = {
      ...titleStyle,
      color: disabled? disabledTitleColor : titleColor,
    };

    return (
      <RaisedButton rippleColor={titleColor} shadeColor={titleColor} {...props}>
        <Text style={[styles.text, titleStyle]} numberOfLines={1}>
          {String(title).toUpperCase()}
        </Text>
      </RaisedButton>
    );
  }
}
