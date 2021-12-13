import NavBar from './NavBar';
import Button from './Button';

export default function Hero() {
  return (
    <div className="bg-hero h-[751px]">
      <div className="container mx-auto">
        <NavBar />
        <div className="text-center mt-20">
          <h1 className="text-3xl font-semibold font-mono text-white w-8/12 mx-auto leading-relaxed">
            Saya seorang frontend developer, backend developer, dan UI designer
          </h1>
          <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 leading-relaxed">
            Sejak 2017 saya memulai programming
          </p>
          <Button className="mt-14" variant="yellow">Pelajari</Button>
        </div>
      </div>
    </div>
  );
};