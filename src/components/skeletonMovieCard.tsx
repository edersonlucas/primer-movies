import ContentLoader from 'react-content-loader';

export default function SkeletonMovieCard() {
  return (
    <ContentLoader
      speed={2}
      width={168}
      height={290}
      viewBox="0 0 145 220"
      backgroundColor="#c2c2c2"
      foregroundColor="#d6d6d6"
      className="rounded-lg border border-gray p-2"
    >
      <rect x="8" y="3" rx="16" ry="16" width="131" height="131" />
      <rect x="13" y="143" rx="2" ry="2" width="86" height="13" />
      <rect x="13" y="165" rx="0" ry="0" width="122" height="6" />
      <rect x="13" y="184" rx="0" ry="0" width="117" height="16" />
      <rect x="13" y="207" rx="7" ry="7" width="47" height="13" />
    </ContentLoader>
  );
}
