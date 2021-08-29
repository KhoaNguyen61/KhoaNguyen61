import React, {useRef, useCallback, useMemo} from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native';
import styles from './styles';
import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import VideoListItem from '../../components/VideoListItem';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import VideoPlayer from '../../components/VideoPlayer';
import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import VideoComments from '../../components/VideoComments';
import VideoComment from '../../components/VideoComment';
import comments from '../../assets/data/comments.json';


const VideoScreen = () => {
  const commentsSheetRef = useRef<BottomSheetModal>(null);

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + 'M'
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + 'K'
  }
  const openComments = useCallback(() => {
    commentsSheetRef.current?.present();
  }, []);
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  //const handleSheetChanges = useCallback((index: number) => {console.log('handleSheetChanges', index);  }, []);



  return (
    <View style={{ backgroundColor: '#2d2d2e', flex: 1 }}>
      {/* Video Player */}
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
      {/*<Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />*/}
    
      <View style={{flex: 1}}>
        {/* Video Info */}
        <View style={styles.midleContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subTitle}>{video.user.name} | {viewsString} | {video.createdAt}</Text>
        </View>

        {/* Action List */}
        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like1" size={20} color="white" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={20} color="white" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <Entypo name="chat" size={20} color="white" />
              <Text style={styles.actionText}>{video.share}</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesome name="share" size={20} color="white" />
              <Text style={styles.actionText}>{video.share}</Text>
            </View>

            <View style={styles.actionListItem}>
              <Entypo name="creative-cloud" size={20} color="white" />
              <Text style={styles.actionText}>{video.creative}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={20} color="white" />
              <Text style={styles.actionText}>{video.download}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="save" size={20} color="white" />
              <Text style={styles.actionText}>{video.save}</Text>
            </View>
          </ScrollView>
        </View>

        {/* User Info  */}
        <View style={{
          flexDirection: 'row', alignItems: 'center', padding: 5, borderColor: 'grey', paddingVertical: 3, borderTopWidth: 1,
          borderBottomWidth: 1,
        }}>
          <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: video.user.image }} />
          <View style={{ marginHorizontal: 10, flex: 1, }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{video.user.name}</Text>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: 'bold' }}>{video.user.subscribers}</Text>
          </View>
          <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', padding: 10, }}>SUBSCRIBERS</Text>
        </View>
        
        {/* Commnets */}
        <View>

        <Pressable onPress={openComments} style={{ paddingLeft: 20, marginVertical: 5 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Comments 333</Text>
            <VideoComment comment={comments[0]}/>
        </Pressable>

        </View>

        {/*All Comments */}

        <BottomSheetModal
          ref={commentsSheetRef}
          snapPoints={snapPoints}
          index={0}
          //onChange={handleSheetChanges}
          //backgroundComponent={({style}) => <View style={[style, {backgroundColor: '#00ffff'}]}/>}
          >
          <VideoComments />
        </BottomSheetModal>
        {/* Recommended Videos */}
        
      </View>
        
    </View>
  )
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#2d2d2e', flex: 1 }}>
      <BottomSheetModalProvider>
        <VideoScreen />
          <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
        
      </BottomSheetModalProvider>
    </SafeAreaView>
  )
}
export default VideoScreenWithRecommendation;