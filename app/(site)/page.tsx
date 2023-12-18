import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="
      flex
      min-h-full
      flex-col
      justify-center
      рy-12
      sm:px-6
      lg:px-8
      bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="50"
          width="50"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
      </div>
    </div>
  )
}
