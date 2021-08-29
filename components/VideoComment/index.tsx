import React from "react";
import { View, Text, Image } from 'react-native';

interface VideoCommentProps {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    likes: number;
    dislikes: number;
    replies: number;
    user: {
      name: string;
      image: string;
    }
  }
}

const VideoComment = ({comment}: VideoCommentProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      <Image style={{ width: 50, height: 50, borderRadius: 25, }} source={{ uri: comment.user.image }} />
      <Text style={{ color: 'white', fontSize: 12, marginLeft: 10 }}>{comment.comment}</Text>
    </View>
    
  )
}

export default VideoComment;

