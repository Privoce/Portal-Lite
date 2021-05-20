// import { useState } from 'react';
import { getVideoPlayer } from './utils';
export default function usePagePlayer() {
  const player = getVideoPlayer();
  const setPlayTime = (time = 0) => {
    if (!player) return;
    player.currentTime = time;
    if (player.paused) {
      player.play();
    }
  };
  const setPlay = (time = 0) => {
    setPlayTime(time);
  };
  const setPause = () => {
    if (!player) return;
    if (!player.paused) {
      player.pause();
    }
  };

  return { player, setPlayTime, setPlay, setPause };
}
