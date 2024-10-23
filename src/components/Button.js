export default function Button({children, classes, icon = '', onClick}) {
  return (
    <button onClick={onClick} className={`flex items-center font-semibold py-150 px-300 rounded-full bg-white border border-rose-400 ${classes}`}>{icon} {children}</button>
  )
}