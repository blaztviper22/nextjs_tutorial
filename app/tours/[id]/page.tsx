import mapsImg from '@/images/maps.jpg';
//console.log(mapsImg); this will return object
import Image from 'next/image';

function page({params}: {params: {id: string}}) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* local image */}
        <div>
            <Image src={mapsImg} alt='maps' />
            <h2>Local image</h2>
        </div>
        {/* remote image */}
      </section>
    </div>
  )
}

export default page
