import { getImageProps } from 'next/image'

export default function ProductImage({image, alt= "", classes}) {
  const common = { alt, sizes: '100vw' }

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 502,
    height: 480,
    quality: 80,
    src: image.desktop,
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 427,
    height: 424,
    quality: 70,
    src: image.tablet,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 654,
    height: 424,
    quality: 70,
    src: image.mobile,
  });

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img sizes="(min-width: 768px) 427px,(min-width: 1000px) 480px," className={`${classes} transition-colors border-2 rounded-lg`} {...rest} />
    </picture>
  )
}