// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}<br/>
         <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="https://twitter.com//Kaushal196"
          target="https://twitter.com//Kaushal196"
        >
        <strong>Connect with me @{author.contacts.twitter}</strong>
        </a>
      </p>
    </div>
  );
};

export default Author;
