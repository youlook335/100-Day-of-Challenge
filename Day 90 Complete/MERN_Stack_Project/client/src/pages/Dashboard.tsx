// import { Link } from "react-router-dom";


// const tutorials = [
//   {
  //     title: "HTML & CSS Masterclass",
//     creator: "Apna College",
//     platform: "YouTube",
//     videoId: "ESnrn1kAD4E",
//     url: "https://www.youtube.com/watch?v=ESnrn1kAD4E",
//   },
//   {
//     title: "Python for Beginners",
//     creator: "CodeWithHarry",
//     platform: "YouTube",
//     videoId: "gfDE2a7MKjA",
//     url: "https://www.youtube.com/watch?v=gfDE2a7MKjA",
//   },
//   {
//     title: "TypeScript DSA",
//     creator: "Tanveer LMS",
//     platform: "Internal",
//     thumbnail: "/thumbnails/ts-dsa.png", // You can create local images later
//     url: "/courses/typescript-dsa",
//   },
//   {
//     title: "DSA with Python",
//     creator: "CodeWithHarry",
//     platform: "YouTube",
//     videoId: "kqtD5dpn9C8",
//     url: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
//   },
//   {
//     title: "React Tutorial for Beginners",
//     creator: "FreeCodeCamp",
//     platform: "YouTube",
//     videoId: "bMknfKXIFA8",
//     url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
//   },
//   {
//     title: "JavaScript Mastery",
//     creator: "Hitesh Choudhary",
//     platform: "YouTube",
//     videoId: "upDLs1sn7g4",
//     url: "https://www.youtube.com/watch?v=upDLs1sn7g4",
//   },
//   {
  //     title: "MongoDB Crash Course",
  //     creator: "Traversy Media",
//     platform: "YouTube",
//     videoId: "ofme2o29ngU",
//     url: "https://www.youtube.com/watch?v=ofme2o29ngU",
//   },
//   {
  //     title: "Git & GitHub Basics",
  //     creator: "Apna College",
  //     platform: "YouTube",
  //     videoId: "apGV9Kg7ics",
  //     url: "https://www.youtube.com/watch?v=apGV9Kg7ics",
  //   },
  //   {
    //     title: "Node.js & Express Bootcamp",
    //     creator: "CodeWithHarry",
    //     platform: "YouTube",
    //     videoId: "BLl32FvcdVM",
    //     url: "https://www.youtube.com/watch?v=BLl32FvcdVM",
//   },
//   {
  //     title: "Data Structures (Full Playlist)",
  //     creator: "Jenny's Lectures",
  //     platform: "YouTube",
  //     videoId: "RBSGKlAvoiM",
//     url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
//   },
// ];

// const Dashboard = () => {
  //   return (
//     <div className="min-h-screen bg-[#0a192f] p-6 text-[#ccd6f6]">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-[#64ffda]">📚 Tanveer LMS Dashboard</h1>
//         <p className="text-gray-400 mt-2 text-lg">Explore 10 high-quality developer courses</p>
//       </header>

//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tutorials.map((item, idx) => {
  //           const isExternal = item.url.startsWith("http");
  //           const thumbnail = item.videoId
//             ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
//             : item.thumbnail || "/default-thumbnail.jpg"; // fallback image

//           return (
  //             <div
  //               key={idx}
//               className="bg-[#112240] p-4 rounded-xl shadow-md hover:shadow-lg transition border border-[#233554]"
//             >
//               {/* Thumbnail */}
//               <a href={item.url} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={thumbnail}
//                   alt={`${item.title} Thumbnail`}
//                   className="rounded-lg mb-3 w-full h-48 object-cover border border-[#233554]"
//                 />
//               </a>

//               {/* Info */}
//               <h2 className="text-lg font-semibold mb-1 text-[#64ffda]">{item.title}</h2>
//               <p className="text-sm text-gray-400 mb-1">By: {item.creator}</p>
//               <p className="text-xs text-gray-500 mb-4">Platform: {item.platform}</p>

//               {/* Button */}
//               {isExternal ? (
//                 <a
//                   href={item.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded hover:opacity-90 text-sm font-semibold"
//                 >
//                   Watch Now
//                 </a>
//               ) : (
  //                 <Link
  //                   to={item.url}
  //                   className="inline-block bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded hover:opacity-90 text-sm font-semibold"
  //                 >
  //                   Explore Course
  //                 </Link>
  //               )}
  //             </div>
  //           );
//         })}
//       </section>

//       <footer className="mt-10 text-center text-gray-500 text-sm">
//         &copy; {new Date().getFullYear()} Tanveer LMS | 10+ Developer Courses
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
import Card from "../components/Card"

function Dashboard() {
  return (
    <>
  <Card/>
    </>
  )
}

export default Dashboard
