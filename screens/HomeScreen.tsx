import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/data/videos.json';



const HomeScreen = () => {
  return (
    
    <ScrollView>
      <VideoListItem video={videos[0]} />
      <VideoListItem video={videos[1]} />
      <VideoListItem video={videos[2]} />
      <VideoListItem video={videos[3]} />
    </ScrollView>
      
    
  )
}

const styles = StyleSheet.create({
  
});
export default HomeScreen;