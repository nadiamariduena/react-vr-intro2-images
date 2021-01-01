import React from "react";
import { AppRegistry, asset, Pano, Image, View } from "react-vr";

export default class ReactVrIntro2 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("RedCliffs_Damaggio.jpg")} />

        <View>
          <Image
            style={{
              width: 2,
              height: 2,
              transform: [{ translate: [0, 1, -4] }],
            }}
            source={asset("claudia-aran-bJy9TI5FGeU-unsplash.jpg")}
          />
        </View>
        <View>
          <Image
            style={{
              width: 3,
              height: 3,
              transform: [{ translate: [2, 3, 5] }],
            }}
            source={asset("clay-banks-k2jF0dYhEKc-unsplash.jpg")}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("ReactVrIntro2", () => ReactVrIntro2);
