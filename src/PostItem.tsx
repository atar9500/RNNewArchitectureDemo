import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// TODO: Once RTNCenteredText has been added, uncomment this import
// import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

import type {Post} from './usePosts';

const styles = StyleSheet.create({
  root: {
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: '#eeeeee',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 8,
  },
  header: {flexDirection: 'row', alignItems: 'center'},
  avatar: {width: 60, height: 60, borderRadius: 30},
  title: {
    color: '#171717',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 8,
  },
  label: {
    color: '#171717',
    fontSize: 18,
    marginTop: 12,
  },
});

type PostItemProps = Omit<Post, 'id'>;

// TODO: Once RTNCenteredText has been added, uncomment the code below
const NativeText = ({
  children /*, height*/,
}: {
  children: string;
  height: number;
}) => {
  // const style = {width: '100%', height};
  // return <RTNCenteredText style={style} text={children} />;

  // TODO: Once RTNCenteredText has been added, comment the code line below
  return <Text style={styles.label}>{children}</Text>;
};

const PostItem = ({
  title,
  description,
  avatar,
  contentHeight,
}: PostItemProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: avatar}} />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="clip">
          {title}
        </Text>
      </View>
      <NativeText height={contentHeight}>{description}</NativeText>
    </View>
  );
};

export default PostItem;
