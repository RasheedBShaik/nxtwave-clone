const HeroDeviCard = () => {
  return (
    <div className="flex flex-col  h-full w-full aspect-360/210 md:aspect-456/220 px-10 justify-center">
      <h4 className="text-lg md:text-2xl text-center w-full font-bold ">
        B.Sc Graduate to a Software Engineer
      </h4>

      <div className="flex justify-between items-center  p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <img src="hero/devi.png" alt="devi" className="max-h-8 max-w-8  " />
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Devi Vyashnavi</p>
            <p className="text-xs text-gray-500">Adikai Nannaya University</p>
          </div>
        </div>

        <img
          className="w-21.5 h-8 border-l-2 pl-4 border-gray-200 object-contain"
          src="hero/NeoSoft.png"
          alt="NeoSoft"
        />
      </div>
    </div>
  );
};

export default HeroDeviCard;
