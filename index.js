import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class ProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progressWidth: 0,
    };
  }


  getDimensions(layout) {
    const {x, y, width, height} = layout;
    this.setState({
      progressWidth: width * (this.props.progress / 100),
    })
  }

  render() {
    return (
      <View 
        style={styles(this.props.barBackgroundColor).progressBar}
        onLayout={(event) => { 
          this.getDimensions(event.nativeEvent.layout) 
        }}
      >
        <View 
          style={{
            backgroundColor: this.props.barColor,
            borderRadius: 30,
            width: this.state.progressWidth,
            flex: 1,
          }}
        />
      </View>
    )
  }

}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  barColor: PropTypes.string.isRequired,
  barBackgroundColor:  PropTypes.string.isRequired,
}

ProgressBar.defaultProps = {
  barBackgroundColor: '#242F37',
  barColor: '#40C74B',
  progress: 0,
}

const styles = (barBackgroundColor) => StyleSheet.create({
  progressBar: {
    backgroundColor: barBackgroundColor,
    flex: 1,
    height: 8,
    borderRadius: 30,
    flexDirection: 'column',
    paddingTop: 1,
    paddingBottom: 1,
  }
});
