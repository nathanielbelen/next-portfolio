export default function Video({path, width, height}) {
  return (
    <video style={{ width: '100%'} } controls preload="none">
      <source src={path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}