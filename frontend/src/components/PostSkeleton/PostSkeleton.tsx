import ContentLoader from "react-content-loader";

const PostSkeleton = () => (
  <ContentLoader
    speed={4}
    width={774}
    height={443}
    viewBox="0 0 774 443"
    backgroundColor="#c0bfbf"
    foregroundColor="#ecebeb"
  >
    <rect x="180" y="297" rx="0" ry="0" width="3" height="1" />
    <rect x="0" y="0" rx="14" ry="14" width="647" height="443" />
  </ContentLoader>
);

export default PostSkeleton;
