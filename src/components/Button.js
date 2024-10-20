export default function Button({children, classes, icon = ''}) {
  return (
    <button className={`${classes} block font-semibold py-150 px-300 rounded-full bg-white border border-rose-400`}>{icon} {children}</button>
  )
}