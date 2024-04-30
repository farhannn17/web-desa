import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import service api
import Api from "../../../services/Api";

//import useParams
import { useParams } from "react-router-dom";

//import component loading
import Loading from "../../../components/general/Loading";

export default function WebFeedbackShow() {
  //init state
  const [feedback, setFeedback] = useState({});
  const [loadingFeedback, setLoadingFeedback] = useState(true);

  //destruct id
  const { slug } = useParams();

  //fetch data page
  const fetchDetailDataFeedback = async () => {
    //setLoadingPages "true"
    setLoadingFeedback(true);

    //fetch data
    await Api.get(`/api/public/feedback/${slug}`).then((response) => {
      //assign response to state "pages"
      setFeedback(response.data.data);

      //title page
      document.title = `${response.data.data.title} - Desa Tanjungtirta`;

      //setLoadingPages "false"
      setLoadingFeedback(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call method "fetchDataPages"
    fetchDetailDataFeedback();
  }, []);

  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        {loadingFeedback ? (
          <Loading />
        ) : (
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-uppercase">
                <i className="fa fa-info-circle"></i> {feedback.title}
              </h4>
              <hr />
              <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body post-content">
                  <p dangerouslySetInnerHTML={{ __html: feedback.content }}></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutWeb>
  );
}
