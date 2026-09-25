import { useState, type CSSProperties } from 'react';

interface BackgroundImageProps {
  sources: readonly string[];
  className?: string;
  style?: CSSProperties;
}

export function BackgroundImage(props: BackgroundImageProps) {
  // Reset the source index when a background is replaced, including during previews.
  return <BackgroundAsset key={props.sources.join('|')} {...props} />;
}

function BackgroundAsset({ sources, className, style }: BackgroundImageProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  if (index >= sources.length) return null;

  return (
    <img
      key={sources[index]}
      src={sources[index]}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      style={{ ...style, opacity: loaded ? style?.opacity : 0 }}
      onLoad={() => setLoaded(true)}
      onError={() => {
        setLoaded(false);
        setIndex((current) => current + 1);
      }}
    />
  );
}