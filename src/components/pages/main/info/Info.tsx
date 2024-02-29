import Image from "next/image";
import { Counter } from "./Counter";

const statistics: StatisticProps[] = [
  {
    name: "Universities",
    count: 32,
    imageString: "/Universities.png",
  },
  {
    name: "Fields",
    count: 64,
    imageString: "/Fields.png",
  },
  {
    name: "Questions",
    count: 128,
    imageString: "/Questions.png",
  },
];

interface StatisticProps {
  name: string;
  count: number;
  imageString: string;
}

const Statistic = ({ name, count, imageString }: StatisticProps) => {
  return (
    <div className="flex flex-row items-center justify-center mx-20 mt-10 mb-5">
      <Image src={imageString} width={100} height={100} alt={name} />
      <div className="text-center m-5">
        <Counter maxCount={count} />
        <p className="text-lg">{name}</p>
      </div>
    </div>
  );
};

export default function Info() {
  return (
    <div className="bg-black p-16 font-bold flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl">We already support</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {statistics.map((statistic: StatisticProps) => (
          <Statistic
            key={statistic.name}
            name={statistic.name}
            count={statistic.count}
            imageString={statistic.imageString}
          />
        ))}
      </div>
      <Image src="/underline.svg" width={1000} height={160} alt="Underline" />
    </div>
  );
}
