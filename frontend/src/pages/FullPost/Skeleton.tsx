import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={4}
    width={896}
    height={512}
    viewBox="0 0 896 512"
    backgroundColor="#c0bfbf"
    foregroundColor="#ecebeb"
  >
    <rect x="180" y="297" rx="0" ry="0" width="3" height="1" />
    <rect x="0" y="0" rx="14" ry="14" width="896" height="512" />
  </ContentLoader>
);

export default Skeleton;
