import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    aspectRatio: 16/9,
  },
  midleContainer: {
    margin: 6,

  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },

  tags: {
    color: '#f7e6f7',
    fontSize: 14,

  },

  textUserName: {
    color: 'black',
    fontSize: 14,
  },

  subTitle: {
    color: '#94c0f2',
    fontSize: 14,
    fontWeight: "500",
  },
  actionListContainer: {
    marginVertical: 5,
    //flexDirection: 'row',
    // backgroundColor: 'red',
  },
  actionListItem: {
    marginHorizontal: 10,
    height: 40,
    width: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;