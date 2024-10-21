export default function Button({children, classes, icon = '', onClick}) {
  return (
    <button onClick={onClick} className={`${classes} block font-semibold py-150 px-300 rounded-full bg-white border border-rose-400`}>{icon} {children}</button>
  )
}