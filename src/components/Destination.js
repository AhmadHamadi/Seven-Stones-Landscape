import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>About Us</h1>
        <p>Our inspiration starts with you</p>
        <DestinationData
          className="first-des"
          heading="Why work with Monet Landscape"
          text="Seven Stones Landscape is a landscape design and build company that gets inspiration from the grand master of landscapes Claude Monet. For those looking to create a space that inspires and stands out, Seven Stones Landscape is here to help. If you have a vision that you can describe we will work with you to build stunning architectural drawings and capture every detail you have envisioned. Our team will custom design in exceptional detail the elements needed to bring your perfect landscape project to life.

We have experience designing and creating projects in both the public and private sectors. There is no vision too big or too complex that we can’t handle."
          img1="https://monetlandscape.com/wp-content/uploads/2020/01/IMG_1782-scaled-199x300.jpg"
          img2="https://monetlandscape.com/wp-content/uploads/2020/01/IMG_5910-scaled-300x200.jpg"
        />

        <DestinationData
          className="first-des-reverse"
          heading="Our Process"
          text="Your dream outdoor space begins with a sketch. Whether you have a clear vision or need some inspiration, let’s talk. Together we can build the sketches that will become the basis of your design.

          From your design sketches, we can add style to your dream. Let us work with you and your space to find the right features that will fit and elevate the surroundings.
          
          Next, we develop a plan that we can use to bring your vision to life. From selecting the perfect designs to choosing the best materials that have lasting excellence from flagstone to modern finishes.
          
          Then we begin the build. Taking your plan and putting them in the hands of some of the best regional contractors we help connect you with the partners that will bring life to your vision."
          img1="https://monetlandscape.com/wp-content/uploads/2020/01/SubstandardFullSizeRender_2-1.jpg"
          img2="https://monetlandscape.com/wp-content/uploads/2020/01/IMG_7519-scaled-300x203.jpg"
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
