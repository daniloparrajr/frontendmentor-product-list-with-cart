import { getImageProps } from 'next/image'

export default function ProductImage({image, alt= ""}) {
  const common = { alt, sizes: '100vw' }

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: image.desktop,
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: image.tablet,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: image.mobile,
  });

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img className="rounded-lg" {...rest} style={{ width: '100%', height: 'auto' }} />
    </picture>
  )
}