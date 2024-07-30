const { useState, useEffect, useRef } = require("react")

const useMediaStream = () => {
    const [state , setState] = useState(null)
    const isStreamSet = useRef(false);

    useEffect(() => {
        if(isStreamSet.current) return;

        isStreamSet.current = true;

        (async function initStream(){
            try{
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio:true,
                    video:true,
                })
                console.log('setting your stream')
                setState(stream)
            }catch(err){
                console.log('Error in media navigator' , err)
            }
        })()
    },[])

    return{
        stream:state
    }
}

export default useMediaStream;