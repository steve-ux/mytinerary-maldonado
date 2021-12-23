const Activity = (props) => {
  let activitiesInfo = props.Activities;

  return (
    <div className="activity-card">
      
    <h5 className="title-activities">{activitiesInfo.activity}</h5>
      <img className="foto-activities" src={activitiesInfo.img}/>
      <h6 className="text-activities">{activitiesInfo.description}</h6>

    </div>
  );
};


export default Activity;


