import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../../services/Api";
import LayoutWeb from "../../../layouts/Web";
import Loading from "../../../components/general/Loading";

export default function WebSaransShow() {
  const { id } = useParams(); // Mendapatkan ID saran perencanaan dari URL
  const [Sarans, setSarans] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaran = async () => {
      setLoading(true);
      try {
        const response = await Api.get(`/api/public/saran/${id}`);
        if (response.data.success) {
          setSarans(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch Saran:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaran();
  }, [id]);

  return (
    <LayoutWeb>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-uppercase">
              <i className="fa fa-lightbulb-o"></i> DETAIL SARAN PERENCANAAN
            </h5>
            <hr />
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : Sarans ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{Sarans.nama}</h5>
              <p className="card-text">{Sarans.saran}</p>
            </div>
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            Data saran perencanaan tidak ditemukan.
          </div>
        )}
      </div>
    </LayoutWeb>
  );
}
