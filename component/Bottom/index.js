import React from 'react'
import cx from 'classnames'
import {
    Mic , Video , PhoneOff , MicOff , VideoOff
} from 'lucide-react'
import styles from '@/component/Bottom/index.module.css'

const Bottom = (props) => {
    const {muted , playing , toggleAudio , toggleVideo ,leaveRoom} = props;


  return (
    <div className={styles.bottomMenu}>

        {muted ? <MicOff className={cx(styles.icon , styles.active)} onClick={toggleAudio} size={55}/> 
        : <Mic className={styles.icon} onClick={toggleAudio} size={55}/>}


        {playing ? <Video className={styles.icon} size={55} onClick={toggleVideo}/> :
         <VideoOff  className={cx(styles.icon , styles.active)} size={55} onClick={toggleVideo}/>}


        <PhoneOff size={55} className={styles.icon} onClick={leaveRoom}/>
    </div>
  )
}

export default Bottom