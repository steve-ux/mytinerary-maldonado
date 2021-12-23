import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import itineraryActions from "../Redux/actions/itineraryActions";
import activitiesActions from "../Redux/actions/activitiesActions";
import Comments from "./Comments";
import HeartFull from "../assets/heartFull.png";
import HeartEmpty from "../assets/heartEmpty.png";
import Activity from "../components/Activity";

const Swal = require("sweetalert2");

const Itinerary = (props) => {
  const [like, setLike] = useState(true);
  const [itinerariesLikes, setItinerariesLikes] = useState(
    props.Itineraries.likes
  );

  const [collapse, setCollapse] = useState(true)
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    props.getActivitiesByItinerary(props.Itineraries._id).then((res) => {
      setActivities(res);
    });
  }, []);

  const toggleInfo = () => {
    setCollapse(!collapse)
}

  const likeItinerary = async () => {
    setLike(false);
    if (!props.token) {
      Swal.fire({
        icon: "error",
        title: "You must be logged to like this post!",
      });
    } else {
      let response = await props.likeDislike(
        props.Itineraries._id,
        props.token
      );
      setItinerariesLikes(response.data.response);
    }
    setLike(true);
  };
  let heart = itinerariesLikes.includes(props.userId) ? HeartFull : HeartEmpty;

  return (
    <div className="card-container">
      <div className="itinerarios">
        <Card className="text-center">
          <Card.Body class="bg-primary">
            <Card.Header>
              <h2 className="title-page-city">{props.Itineraries.title}</h2>
              <img
                className="foto-itinerarios"
                src={props.Itineraries.photo}
                width="30%"
              />
            </Card.Header>
            <Card.Title>{props.Itineraries.name}</Card.Title>
            <Card.Text>
              <p className="datos-itinerarios">
                Price: {"💵".repeat(props.Itineraries.price)}
              </p>
              <p className="datos-itinerarios">
                Duration:{"🕒".repeat(props.Itineraries.duration)}
              </p>
              <img width="25" src={heart} onClick={likeItinerary} />
              <p className="likes">{itinerariesLikes.length}</p>
              <p className="datos-itinerarios">{props.Itineraries.hashtag}</p>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header class="d-flex align-items-center" onClick={toggleInfo}>
                  <p>{collapse ? "View Less" : "View More"}</p>                  
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2 className="title-page-activities">Activities</h2>
                    <div className="activity">
                      {activities.map((activities) => (
                        <Activity
                          Activities={activities}
                          key={activities._id}
                        />
                      ))}
                    </div>
                    <Comments
                      itineraryId={props.Itineraries._id}
                      comments={props.Itineraries.comments}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer._id,
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = {
  getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
  likeDislike: itineraryActions.addOrRemoveLike,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
