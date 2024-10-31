export default function Emblem({ emblem: {text, color} }) {
  return (
    <span className={`${color} text-black py-1 px-2 text-center text-xs rounded-lg mx-1`}>
      {text}
    </span>
  )
}