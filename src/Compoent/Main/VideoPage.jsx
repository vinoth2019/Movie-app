import './VideoPage.css';
const VideoPage = () => {
  let source = `https://www.youtube.com/embed/W5y6GpJ2a1E?si=7gc_ThnQEtqRjWle_${2}`
  return (
    <div className='video-container'>
        <div>
            {/* <video height="640px" width="auto" controls={true} src='https://www.youtube.com/embed/W5y6GpJ2a1E?si=P3YEO9RqUsoyMana'>
                
            </video> */}
            <iframe width="640px" height="500px" src={source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    </div>
  )
}

export default VideoPage