import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    }
  }
}
  
const VideoListItem = (props: VideoListItemProps) => {
  const { video } = props;

  const navigation = useNavigation();

  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  {/* CHÚ Ý: Lỗi bắt đầu từ đây */ }
  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views/1000000).toFixed(1) + 'M'
  } else if (video.views > 1000) {
    viewsString = (video.views/1000).toFixed(1) + 'K'
  }

  const openVideoPage = () => {
    navigation.navigate("VideoScreen", {id: video.id});
  }

  return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      <View>
        <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''}</Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image style={styles.avatar} source={{ uri: video.user.image }} />

        <View style={styles.midleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subTitle}>{video.user.name} | {viewsString} | {video.createdAt}</Text>
        </View>
        
        <Entypo name="dots-three-vertical" size={18} color="white"/>
      </View>
    </Pressable>
  )
}


export default VideoListItem;