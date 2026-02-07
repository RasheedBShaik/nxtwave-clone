const HeroBhargaviCard = () => {
  return (
    <div className="flex flex-col h-full w-full aspect-360/210 md:aspect-456/220 px-10 justify-center">
      <h4 className="text-lg md:text-2xl text-center flex justify-center items-center w-full font-bold pt-4">
        Mock interviews by the placement team helped me improve.
      </h4>

      <div className="flex justify-between items-center p-3 py-10 rounded-xl">
        <div className="flex items-center gap-2">
          <img src="hero/bhargavi.png" alt="Bhargavi" className="max-h-8 max-w-8  " />
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Bhargavi</p>
            <p className="text-xs text-gray-500">CSE, JNTU</p>
          </div>
        </div>

        <img
          className="w-21.5 h-8 border-l-2 pl-4 border-gray-200 object-contain"
          src="hero/systech.png"
          alt="Systech"
        />
      </div>
    </div>
  );
};

export default HeroBhargaviCard;
