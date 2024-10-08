import { useSocket } from '@/context/socket'
import { cloneDeep } from 'lodash'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const usePlayer = (myId , roomId,peer) => {
    const socket = useSocket()
    const [players ,setPlayers] = useState({})
    const playerCopy = cloneDeep(players)
  const router = useRouter()
    const playerHighlighted = playerCopy[myId]
    delete playerCopy[myId]

    const leaveRoom = () => {
      socket.emit('user-leave' , myId , roomId )
      console.log('leaving room' , roomId)
      peer?.disconnect()
      router.push('/')

    }

    const nonHighlightedPlayers = playerCopy;

    const toggleAudio = () => {
      console.log('I toggled audio')
      setPlayers((prev) => {
        const copy = cloneDeep(prev);
        copy[myId].muted = !copy[myId].muted
        return {...copy}
      })
      socket.emit('user-toggle-audio' , myId , roomId)
    }
    const toggleVideo = () => {
      console.log('I toggled video')
      setPlayers((prev) => {
        const copy = cloneDeep(prev);
        copy[myId].playing = !copy[myId].playing
        return {...copy}
      })
      socket.emit('user-toggle-video' , myId , roomId)
    }

  return {players , setPlayers , playerHighlighted , nonHighlightedPlayers ,toggleAudio ,toggleVideo,leaveRoom}
}

export default usePlayer;