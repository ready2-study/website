import Image from "next/image";

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
    <div>
      <Image src={imageString} width={50} height={50} alt={name} />
      <div>
        <h1>{count}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default function Info() {
  return (
    <div>
      <h1>We already support</h1>
      <div>
        {statistics.map((statistic: StatisticProps) => (
          <Statistic
            key={statistic.name}
            name={statistic.name}
            count={statistic.count}
            imageString={statistic.imageString}
          />
        ))}
      </div>
      <Image src="/underline.svg" width={1000} height={400} alt="Underline" />
    </div>
  );
}
