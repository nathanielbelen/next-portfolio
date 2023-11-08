export default function Console({ messages, reset }) {
  return (
    <div className='relative min-h-[212px] border-2 font-code leading-7.5 flex flex-col-reverse justify-items-end p-2 bg-gray-800 text-gray-300'>
      { messages?.map((message, index) => {
        return (<div key={`messages-${index}`} className='truncate'>{message}</div>)
      }) }
      <button onClick={reset} className='absolute right-0 top-0 border bg-gray-500 px-1 m-1 rounded-md'>reset</button>
    </div>
  )
}