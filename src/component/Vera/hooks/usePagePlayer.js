// import { useState } from 'react';
import { getVideoPlayer } from './utils';
export default function usePagePlayer() {
  const player = getVideoPlayer();
  const syncPlayTime = (time = 0) => {
    if (!player) return;
    player.currentTime = time;
    if (player.paused) {
      player.play();
    }
  };

  return { player, syncPlayTime };
}
