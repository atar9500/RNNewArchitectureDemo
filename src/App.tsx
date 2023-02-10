import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ListRenderItem,
} from 'react-native';
import PostItem from './PostItem';
import usePosts, {Post} from './usePosts';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#bdbdbd',
    flex: 1,
  },
  separator: {height: 16},
  list: {paddingVertical: 16, backgroundColor: 'white'},
});

const Separator = () => <View style={styles.separator} />;

const renderPostItem: ListRenderItem<Post> = ({item}) => {
  const {id, ...rest} = item;
  return <PostItem key={id} {...rest} />;
};

const App = () => {
  const posts = usePosts();

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={posts}
        style={styles.list}
        renderItem={renderPostItem}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

export default App;
