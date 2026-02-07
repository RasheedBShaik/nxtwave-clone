
const HeroOnlineLabsCard = () => {
  return (
  
    <div className="flex-1 flex items-center gap-4 md:gap-4 max-w-full aspect-360/210 md:aspect-456/220 justify-center">
      <div className="aspect-4/3 flex-1">
        <img
          src="hero/online-labs.png"
          alt="doubts-clarification"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-2 flex-col gap-2">
        <h3 className="text-md md:text-xl font-bold">24/7 Online Labs Accessible</h3>
        <p className="text-sm text-gray-600">for Hands-on experience</p>
      </div>
    </div>
  )
}
export default HeroOnlineLabsCard
