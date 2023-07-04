import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="265" rx="8" ry="8" width="280" height="27" />
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="315" rx="8" ry="8" width="280" height="88" />
    <rect x="0" y="440" rx="8" ry="8" width="71" height="26" />
    <rect x="128" y="421" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
);
