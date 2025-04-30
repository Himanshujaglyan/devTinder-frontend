import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeed } from '../utils/feedSlice';
import UserCard from './UserCard'
import NofeedShimmer from '../Shimmer/NofeedShimmer'
import ShimmerCard from '../Shimmer/ShimmerCard'; // Assuming you have a ShimmerCard component
import { Bases_URL } from '../utils/constants';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getfeed = async () => {
    // Only fetch if feed is not already loaded or is empty
    if (feed && feed.length > 0) return;

    try {
      const res = await axios.get(Bases_URL + "/feed", { withCredentials: true });
      dispatch(addfeed(res?.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getfeed();
  }, []);

  // Conditional rendering based on feed state
  if (!feed) return <ShimmerCard />; // Show shimmer card while loading
  if (feed.length === 0) return <NofeedShimmer />; // Show no feed shimmer if feed is empty
  
  return (
    <UserCard user={feed[0]} /> // Display the first user's card from the feed
  );
}

export default Feed;
