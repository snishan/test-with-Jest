"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../types';
import { RootState } from '@/app/store/store';
import { fetchPostsRequest } from '@/app/store/slices/postSlice';
import styles from './PostList.module.css'; // Import the CSS module


const PostList: React.FC = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.posts);
  
    useEffect(() => {
      dispatch(fetchPostsRequest());
    }, [dispatch]);
  
    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>Error: {error}</p>;
  
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Posts</h1>
        {data.map((post: Post) => (
          <div key={post.id} className={styles.postItem}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postBody}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PostList;
