import Link from 'next/link';

const Box = ({ name, link } : { name: string; link: string;}) => {
  return (
    <Link href={link}>
      <div className="p-4 border-2 border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md hover:bg-pink-100" style={{marginRight: 10}}>
        {name}
      </div>
    </Link>
  );
};

export default Box;
