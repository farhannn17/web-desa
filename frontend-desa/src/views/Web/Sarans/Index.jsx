import React, { useState, useEffect } from "react";
import Api from "../../../services/Api";
import LayoutWeb from "../../../layouts/Web";
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";
import Loading from "../../../components/general/Loading";

export default function WebSaransIndex() {
  document.title = "Saran Perencanaan - Desa Tanjungtirta";

  const [Sarans, setSarans] = useState([]);
  const [loadingSarans, setLoadingSarans] = useState(true);

  useEffect(() => {
    fetchDataSarans();
  }, []);

  const fetchDataSarans = async () => {
    setLoadingSarans(true);
    try {
      const response = await Api.get("/api/public/saran");
      if (response.data.success) {
        const saransWithCurrentTime = response.data.data.map(saran => ({
          ...saran,
          current_time: Date.now() // Tambahkan waktu penerimaan data
        }));
        setSarans(saransWithCurrentTime);
      }
    } catch (error) {
      console.error("Failed to fetch Sarans:", error);
    } finally {
      setLoadingSarans(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await Api.post("/api/public/saran", {
        nama: formData.get("nama"),
        saran: formData.get("saran"),
      });
      if (response.data.success) {
        fetchDataSarans(); // Refresh Sarans after successful submission
        event.target.reset(); // Reset form fields
      } else {
        console.error("Failed to submit suggestion:", response.data.message);
      }
    } catch (error) {
      console.error("Error submitting suggestion:", error);
    }
  };

  const styles = {
    formGroup: {
      marginBottom: "20px"
    },
    saranCard: {
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
    cardBody: {
      padding: "20px"
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold"
    },
    cardSubtitle: {
      fontSize: "14px",
      color: "#666"
    },
    cardText: {
      fontSize: "16px",
      marginTop: "10px"
    },
    submitButton: {
      marginTop: "10px"
    }
  };

  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-uppercase">
              <i className="fa fa-lightbulb-o"></i> SARAN PERENCANAAN
            </h5>
            <hr />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="nama">Nama:</label>
                <input type="text" className="form-control" id="nama" name="nama" required />
              </div>
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="saran">Saran:</label>
                <textarea className="form-control" id="saran" name="saran" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={styles.submitButton}>Kirim</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          {loadingSarans ? (
            <Loading />
          ) : Sarans.length > 0 ? (
            Sarans.map((saran, index) => (
              <div className="col-md-6" key={index}>
                <div className="card" style={styles.saranCard}>
                  <div className="card-body" style={styles.cardBody}>
                    <h5 className="card-title" style={styles.cardTitle}>{saran.nama}</h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={styles.cardSubtitle}>
                      {new Date(saran.current_time).toLocaleString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                      })}
                    </h6>
                    <hr />
                    <p className="card-text" style={styles.cardText}>{saran.saran}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <AlertDataEmpty />
          )}
        </div>
      </div>
    </LayoutWeb>
  );
}
