import { getImageProps } from 'next/image'

export default function ProductImage({image, alt= "", classes}) {
  const {
    props: { srcSet: desktop, sizes: desktopSizes },
  } = getImageProps({
    width: 502,
    height: 480,
    quality: 80,
    src: image.desktop,
    sizes: "25vw"
  });

  const {
    props: { srcSet: tablet, sizes: tabletSizes },
  } = getImageProps({
    width: 427,
    height: 424,
    quality: 70,
    src: image.tablet,
    sizes: "33.33333vw"
  });

  const {
    props: { srcSet: mobile, sizes: mobileSizes, ...rest },
  } = getImageProps({
    width: 654,
    height: 424,
    quality: 70,
    src: image.mobile,
    sizes: "100vw"
  });

  return (
    <picture>
      <source media="(min-width: 1080px)" srcSet={desktop} sizes={desktopSizes} />
      <source media="(min-width: 768px)" srcSet={tablet} sizes={tabletSizes} />
      <source srcSet={mobile} sizes={mobileSizes} />
      <img className={`${classes} transition-colors border-2 rounded-lg`} {...rest} alt={alt} />
    </picture>
  )
}