// import React, { useState, useEffect } from "react";

// //import layout web
// import LayoutWeb from "../../../layouts/Web";

// //import service api
// import Api from "../../../services/Api";

// //import component alert
// import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

// //import component loading
// import Loading from "../../../components/general/Loading";

// //import component card post
// import CardPotensi from "../../../components/general/CardPotensi";

// //import pagination component
// import Pagination from "../../../components/general/pagination";

// export default function WebPotensisIndex() {
//   //title page
//   document.title = "Berita - Desa Tanjungtirta";

//   //init state
//   const [potensi, setPotensi] = useState([]);
//   const [loadingPotensi, setLoadingPotensi] = useState(true);

//   //define state "pagination"
//   const [pagination, setPagination] = useState({
//     currentPage: 0,
//     perPage: 0,
//     total: 0,
//   });

//   //fetch data Potensi
//   const fetchDataPotensi = async (pageNumber = 1) => {
//     //setLoadingPotensi "true"
//     setLoadingPotensi(true);

//     //define variable "page"
//     const page = pageNumber ? pageNumber : pagination.currentPage;

//     await Api.get(`/api/public/potensi?page=${page}`).then((response) => {
//       //assign response to state "posts"
//       setPotensi(response.data.data.data);

//       //set data pagination to state "pagination"
//       setPagination(() => ({
//         currentPage: response.data.data.current_page,
//         perPage: response.data.data.per_page,
//         total: response.data.data.total,
//       }));

//       //setLoadingPost "false"
//       setLoadingPotensi(false);
//     });
//   };

//   //hook useEffect
//   useEffect(() => {
//     //call method "fetchDataPosts"
//     fetchDataPotensi();
//   }, []);

//   return (
//     <LayoutWeb>
//       <div className="container mt-4 mb-3">
//         <div classname="row">
//           <div className="col-md-12">
//             <h5 className="text-uppercase">
//               <i className="fa fa-book"></i> BERITA DESA
//             </h5>
//             <hr />
//           </div>
//         </div>
//         <div className="row mt-4">
//           {loadingPotensi ? (
//             <Loading />
//           ) : potensi.length > 0 ? (
//             potensi.map((potensi) => (
//               <CardPotensi
//                 key={potensi.id}
//                 image={potensi.image}
//                 slug={potensi.slug}
//                 title={potensi.title}
//                 content={potensi.content}
//                 date={potensi.created_at}
//               />
//             ))
//           ) : (
//             <AlertDataEmpty />
//           )}
//         </div>
//         <Pagination
//           currentPage={pagination.currentPage}
//           perPage={pagination.perPage}
//           total={pagination.total}
//           onChange={(pageNumber) => fetchDataPotensi(pageNumber)}
//           position="center"
//         />
//       </div>
//     </LayoutWeb>
//   );
// }
