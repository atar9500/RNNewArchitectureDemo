import {faker} from '@faker-js/faker';
import React from 'react';

export type Post = {
  id: string;
  title: string;
  description: string;
  avatar: string;
  contentHeight: number;
};

const generateMockPosts = (amount: number): Post[] =>
  Array(amount)
    .fill(undefined)
    .map(() => ({
      id: faker.datatype.uuid(),
      title: faker.name.fullName(),
      description: faker.lorem.paragraph(),
      avatar: faker.internet.avatar(),
      contentHeight: Math.round(Math.random() * 300) + 100,
    }));

const usePosts = () => {
  return React.useMemo(() => generateMockPosts(10000), []);
};

export default usePosts;
