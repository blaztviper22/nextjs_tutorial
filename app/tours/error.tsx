'use client';

function error({error}: {error: Error}) {
    console.error(error); // see the error message
  return (
    <span className="text-xl capitalize">there was an error...</span>
  )
}

export default error
