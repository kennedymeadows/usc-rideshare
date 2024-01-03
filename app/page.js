import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto text-center pt-4 bg-gradient-to-b from-red-100 to-red-900 min-h-screen">
      <div className="min-w-0 flex-1">
        <h3 className="text-xl text-black-300 font-thin font-sans">WELCOME TO</h3>
        <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-8xl sm:tracking-tight">
          <span className="text-red-600">USC</span> <span className="text-yellow-500">RIDESHARE</span>
        </h2>
      </div>
    </div>

    
  );
}