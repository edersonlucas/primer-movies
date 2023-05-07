import ContentLoader from 'react-content-loader';

export default function SkeletonCarousel() {
  return (
    <section
      data-testid="skeleton-carousel"
      className="mt-16 flex h-64 w-full justify-center bg-white md:h-[30rem] md:justify-start"
    >
      <ContentLoader
        speed={2}
        width={1280}
        height={320}
        viewBox="0 0 1280 380"
        backgroundColor="#c2c2c2"
        foregroundColor="#d6d6d6"
        className="h-full w-full rounded-lg"
      >
        <rect x="75" y="150" rx="16" ry="16" width="60" height="60" />
        <rect x="1150" y="150" rx="16" ry="16" width="60" height="60" />
        <rect x="180" y="120" rx="2" ry="2" width="180" height="14" />
        <rect x="180" y="160" rx="2" ry="2" width="350" height="24" />
        <rect x="180" y="207" rx="7" ry="10" width="60" height="22" />
        <rect x="250" y="209" rx="7" ry="10" width="280" height="18" />
      </ContentLoader>
    </section>
  );
}
