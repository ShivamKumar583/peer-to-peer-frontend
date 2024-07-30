import { Copy } from 'lucide-react';
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from '@/component/CopySection/index.module.css'

const CopySection = (props) => {
    const {roomId} = props;

  return (
    <div className={styles.copyContainer}>
    <CopyToClipboard text={roomId}>
        <div className={styles.copyHeading}>Copy Room Id
          <div className={styles.copyDescription}>
                  <Copy className=' ml-3 cursor-pointer' />
          </div>
        </div>
    </CopyToClipboard>  
    </div>
  )
}

export default CopySection