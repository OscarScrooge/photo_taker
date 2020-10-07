import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {style} from '../style/style';
import Icon from 'react-native-vector-icons/FontAwesome';

function PhotoTaker(props) {
  const [images, setImage] = useState([]);

  const cameraLaunch = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = 'data:' + response.type + ';base64,' + response.data;
        setImage([...images, ...[source]]);
      }
    });
  };

  return (
    <View>
      <View style={style.buttonContainer}>
        <TouchableOpacity onPress={cameraLaunch} style={style.button}>
          <Icon style={style.icon} name="camera" />
        </TouchableOpacity>
      </View>
      <View style={style.contianerImages}>
        {images.map((value, key) => (
          <Image source={{uri: value}} key={key} style={style.image} />
        ))}
      </View>
    </View>
  );
}

export default PhotoTaker;
