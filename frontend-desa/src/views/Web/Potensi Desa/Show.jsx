// import React, { useState, useEffect } from "react";

// //import layout web
// import LayoutWeb from "../../../layouts/Web";

// //import service api
// import Api from "../../../services/Api";

// //import useParams
// import { Link, useParams } from "react-router-dom";

// //import component loading
// import Loading from "../../../components/general/Loading";

// //import date ID
// import DateID from "../../../utils/DateID";

// export default function WebPotensiShow() {
//   //init state detail post
//   const [Potensi, setPotensi] = useState({});
//   const [loadingPotensi, setLoadingPotensi] = useState(true);

//   // //init state all Potensi homepage
//   // const [potensi, setPotensi] = useState([]);
//   // const [loadingPotensi, setLoadingPotensi] = useState(true);

//   //destruct slug
//   const { slug } = useParams();

//   //fetch data post
//   const fetchDetailDataPotensi = async () => {
//     //setLoadingPost "true"
//     setLoadingPotensi(true);

//     //fetch data
//     await Api.get(`/api/public/potensi/${slug}`).then((response) => {
//       //assign response to state "posts"
//       setPotensi(response.data.data);

//       //title page
//       document.title = `${response.data.data.title} - Desa Santri`;

//       //setLoadingPost "false"
//       setLoadingPotensi(false);
//     });
//   };

//   //fetch data all posts
//   const fetchAllPotensi = async () => {
//     //setLoadingPosts "true"
//     setLoadingPotensi(true);

//     //fetch data
//     await Api.get("/api/public/potensi_home").then((response) => {
//       //assign response to state "posts"
//       setPotensi(response.data.data);

//       //setLoadingPosts "false"
//       setLoadingPotensi(false);
//     });
//   };

//   //hook useEffect
//   useEffect(() => {
//     //call method "fetchDetailDataPost"
//     fetchDetailDataPotensi();

//     //call method "fetchAllPosts"
//     fetchAllPotensi();
//   }, [slug]);

//   return (
//     <LayoutWeb>
//       <div className="container mt-4 mb-3">
//         <div className="row">
//           <div className="col-md-8 mb-4">
//             {loadingPotensi ? (
//               <Loading />
//             ) : (
//               <div className="card border-0 shadow-sm rounded-3">
//                 <div className="card-body potensi-content">
//                   <h4 className="text-normal"> {potensi.title}</h4>
//                   <div className="author mt-3">
//                     <span>
//                       <i className="fa fa-user"></i> {potensi.user.name}
//                     </span>
//                     <span>
//                       <i className="fa fa-folder ms-4 ml-4"></i>{" "}
//                       {potensi.category.name}
//                     </span>
//                     <span>
//                       <i className="fa fa-calendar ms-4 ml-4"></i>{" "}
//                       {DateID(new Date(potensi.created_at))}
//                     </span>
//                   </div>
//                   <hr />
//                   <img
//                     src={potensi.image}
//                     class="rounded-3 w-100 mb-3"
//                     alt={potensi.title}
//                   />
//                   <p dangerouslySetInnerHTML={{ __html: potensi.content }}></p>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="col-md-4">
//             <h5 className="text-uppercase">
//               <i className="fa fa-book"></i> BERITA TERBARU
//             </h5>
//             <hr />
//             {loadingPotensi ? (
//               <Loading />
//             ) : (
//               potensi.map((potensi) => (
//                 <Link
//                   to={`/potensi/${potensi.slug}`}
//                   className="text-decoration-none"
//                 >
//                   <div class="card mb-3 w-100 rounded-3 border-0 shadow-sm">
//                     <div class="row g-0 mb-0 pb-0">
//                       <div class="col-md-5">
//                         <img
//                           src={potensi.image}
//                           class="img-fluid h-100 w-100 object-fit-cover rounded-start"
//                           alt={potensi.title}
//                         />
//                       </div>
//                       <div class="col-md-7">
//                         <div class="card-body">
//                           <span class="card-title">
//                             {potensi.title.length > 30
//                               ? `${potensi.title.substring(0, 30)}...`
//                               : potensi.title}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </LayoutWeb>
//   );
// }
