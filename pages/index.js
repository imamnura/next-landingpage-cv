import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex bg-blue-500 items-center">
          <div className="w-3/12">
            <Logo />
          </div>
          <div className="w-6/12">
            <Nav />
          </div>
          <div className="w-3/12 text-right">
            <Button>Kontak</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
