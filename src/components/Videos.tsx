interface VideosProps {
  videos: any[];
}

const Videos = ({ videos }: VideosProps) => {
  console.log(videos.length);
  return <div>Videos</div>;
};

export default Videos;
