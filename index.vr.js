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
              transform: [{ translate: [1, 1, -2] }, { rotateY: -45 }],
            }}
            source={asset("andriyko-podilnyk-kOcPPFamcag-unsplash.jpg")}
          />
        </View>
        <View>
          <Image
            style={{
              width: 2,
              height: 2,
              transform: [{ translate: [-2, 3, -2] }, { rotateY: 45 }],
            }}
            source={asset("coco-tafoya-2Z7GgUpsSqg-unsplash.jpg")}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("ReactVrIntro2", () => ReactVrIntro2);


