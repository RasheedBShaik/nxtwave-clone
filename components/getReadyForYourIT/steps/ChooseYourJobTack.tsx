import JobTrackCards from "./JobTrackCards"

const ChooseYourJobTack = () => {
  return (
    <div className="my-4 font-normal text-black text-left">
      Based on your Fundamentals exam score, we'll also <br />recommend you a suitable Job Track.
      <JobTrackCards/>
    </div>
  )
}

export default ChooseYourJobTack
