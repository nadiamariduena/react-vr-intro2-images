# React 360 _VR IMAGES_

## Learning how to add and manipulate images

<br>
<br>

<!-- > the best 360 cameras

[Ricoh Theta Z1: The DSLR of 360 Cameras?](https://www.youtube.com/watch?v=0uN7k9VSu_8)

[The Best 360 Cameras for 2021 | PCMag](https://uk.pcmag.com/digital-camcorders/89938/the-best-360-cameras-for-2020) -->

<br>
<br>
<br>

### START by adding images inside the static_assets folder 🌻

- add 360 deg images to the panorama

```javascript
// <Pano> stands for "panorama"

<Pano source={asset("chess-world.jpg")} />
// chess-world is the default image
// 
//
```

<br>

##### DELETE the following:

```javascript
<Text
  style={{
    backgroundColor: "#777879",
    fontSize: 0.8,
    fontWeight: "400",
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: "center",
    textAlignVertical: "center",
    transform: [{ translate: [0, 0, -3] }],
  }}
>
  hello
</Text>
```

<br>

##### Download or create in (photoshop) few images with the following measurements:

- Picture 1: 800 x 600
- Picture 2: 400 x 300
- Picture 3: 800 x 600
