import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import service api
import Api from "../../../services/Api";

//import component alert
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

//import component loading
import Loading from "../../../components/general/Loading";

//import component card feedback
import CardFeedback from "../../../components/general/CardFeedback";

export default function WebFeedbackIndex() {
  //title page
  document.title = "Tentang Desa - Desa Tanjungtirta";

  //init state
  const [feedback, setFeedback] = useState([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);

  //fetch data feedback
  const fetchDataFeedback = async () => {
    //setLoadingfeedback "true"
    setLoadingFeedback(true);

    //fetch data
    await Api.get("/api/public/feedback").then((response) => {
      //assign response to state "feedback"
      setLoadingFeedback(response.data.data);

      //setLoadingfeedback "false"
      setLoadingFeedback(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call method "fetchDatafeedback"
    fetchDataFeedback();
  }, []);

  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        <div classname="row">
          <div className="col-md-12">
            <h5 className="text-uppercase">
              <i className="fa fa-info-circle"></i> SARAN PERENCANAAN
            </h5>
            <hr />
          </div>
        </div>
        <div className="row mt-4">
          {loadingFeedback ? (
            <Loading />
          ) : feedback.length > 0 ? (
            feedback.map((Feedback) => (
              <CardFeedback key={Feedback.id} title={Feedback.title} slug={Feedback.slug} />
            ))
          ) : (
            <AlertDataEmpty />
          )}
        </div>
      </div>
    </LayoutWeb>
  );
}
