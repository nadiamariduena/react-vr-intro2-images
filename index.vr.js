import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class ReactVrIntro2 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("Chris Guico.jpg")} />
      </View>
    );
  }
}

AppRegistry.registerComponent("ReactVrIntro2", () => ReactVrIntro2);
