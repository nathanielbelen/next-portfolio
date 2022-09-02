import { useForm, ValidationError } from '@formspree/react';

export default function FormSpree() {
  const [state, handleSubmit] = useForm('xrgdbalz');
  if (state.succeeded) {
    return (
      <div className='flex flex-col border p-5 m-5'>
        <p>Thank you for your message!</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col md:border md:p-5 md:m-5'>
        <label htmlFor='name' className='block'>
          <strong>Name</strong>
        </label>
        <input
          id='name'
          type='name'
          name='name'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <label htmlFor='email' className='block pt-3'>
          <strong>Email Address</strong>
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='message' className='block pt-3'>
          <strong>Message</strong>
        </label>
        <textarea
          id='message'
          name='message'
          className='shadow appearance-none border rounded w-full h-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <div className='mt-5 flex content justify-center'>
          <button
            type='submit'
            className='hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow'
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
