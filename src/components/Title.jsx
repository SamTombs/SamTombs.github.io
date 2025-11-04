import TitleLogo from "../assets/TitleLogo.png";

export default function Title() {
  return (
    <div className="flex justify-center items-center">
      <img src={TitleLogo} alt="TitleLogo" className="w-2/3 h-2/3 object-cover lg:object-contain rounded-xl" />
    </div>
  );
}