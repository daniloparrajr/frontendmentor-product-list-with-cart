export default function Button({type = 'default', children, classes, icon = '', onClick}) {
  let btnStyles = '';
  if (type === 'default') {
    btnStyles = 'bg-white border-rose-400 py-150 px-300';
  } else if (type === 'primary') {
    btnStyles = 'bg-red text-white p-200';
  }
  return (
    <button onClick={onClick} className={`flex justify-center items-center font-semibold rounded-full  border ${btnStyles} ${classes}`}>{icon} {children}</button>
  )
}