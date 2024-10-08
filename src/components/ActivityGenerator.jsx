import { getRandomActivity, getRandomFilteredActivity } from "../services/bored-api"

export default function ActivityGenerator({selectedType, setActivity}) {
  const handleGenerate = () => {
    if (!selectedType) getRandomActivity().then(activity => setActivity(activity));
    else getRandomFilteredActivity().then(activity => setActivity(activity));
  }

  return (
    <div>
    <img className="mascot" src="mascot.png" alt="app mascot"/>
      <h1>TROBA ALGUNA COSA A FER</h1>
      <button className="black big" onClick={handleGenerate}>Generar</button>
    </div>
  )
}
