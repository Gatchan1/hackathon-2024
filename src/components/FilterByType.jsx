
export default function FilterByType({selectedType, setSelectedType}) {

  const activityTypes = [
    { type: "education", catalan: "Educació" },
    { type: "recreational", catalan: "Recreació" },
    { type: "social", catalan: "Social" },
    { type: "charity", catalan: "Caritat" },
    { type: "cooking", catalan: "Cuinar" },
    { type: "relaxation", catalan: "Relaxació" },
    { type: "busywork", catalan: "Treball intens" },
  ];

  const handleSelection = (type) => {
    type == selectedType ? setSelectedType("") : setSelectedType(type);
  };

  return (
    <div>
      {activityTypes.map((activity, i) => (
        <button key={i} className={activity.type == selectedType ? "pressed" : "not-pressed"} onClick={() => handleSelection(activity.type)}>
          {activity.catalan}
        </button>
      ))}
    </div>
  );
}
