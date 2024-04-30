import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid footer-top">
        <div className="row p-4">
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              TENTANG
              <strong style={{ color: "#ffd22e" }}> DESA TANJUNGTIRTA</strong>
            </h5>
            <hr />
            <div className="text-center">
              <img src="/images/logo-jbg.png" width="70" />
            </div>
            <p className="text-justify mt-3">
              Desa Tanjungtirta merupakan desa yang berletak di kabupaten Banjarnegara dan
              desa ini kebanyakan berada di salah satu kawasan Komoditas salak terbesar.
            </p>
          </div>  
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              PETA WILAYAH <strong style={{ color: "#ffd22e" }}> DESA</strong>
            </h5>
            <hr />
            <p className="text-justify mt-2 text-left">
              Cari tahu lebih banyak tentang wilayah Desa Tanjungtirta dengan menggunakan peta interaktif di bawah ini.
            </p>
            <div className="text-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31657.716215729666!2d109.61606084495355!3d-7.329786516059212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7000991ce61fe1%3A0x5027a76e35521c0!2sTanjungtirta%2C%20Kec.%20Punggelan%2C%20Kab.%20Banjarnegara%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1703491153543!5m2!1sid!2sid"
                width="100%"
                height="250"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              KONTAK <strong style={{ color: "#ffd22e" }}>DESA</strong>
            </h5>
            <hr />
            <p>
              <i className="fa fa-map-marker"></i> Desa Tanjungtirta, Kecamatan Punggelan, Kabupaten Banjarnegara
              <br />
              <br />
              <i className="fas fa-envelope"></i> Tanjungtirta123@gmail.com
              <br />
              <br />
              <i className="fas fa-phone"></i> +62 822-3655-9226
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="row p-3">
          <div className="text-center text-white font-weight-bold">
            Copyright © 2023 Desa Tanjungtirta. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
