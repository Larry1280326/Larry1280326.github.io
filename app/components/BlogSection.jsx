"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import ProjectTag from "./ProjectTag";

const blogData = [
  {
    id: "taipei",
    title: "Taipei 🇹🇼",
    location: "Taiwan",
    date: "2026",
    tag: ["All", "Travel"],
    description: "A memorable trip to Taipei exploring the vibrant city, delicious food, and beautiful sights",
    image: "/images/blog/taipei/IMG_0011.jpg",
  },
  {
    id: "harbin",
    title: "Harbin 🇨🇳",
    location: "China",
    date: "2025",
    tag: ["All", "Travel"],
    description: "A memorable trip to Harbin exploring the winter wonderland and beautiful ice sculptures",
    image: "/images/blog/harbin/IMG_7827.png",
  },
  {
    id: "singapore",
    title: "Singapore 🇸🇬",
    location: "Singapore",
    date: "2024",
    tag: ["All", "Exchange"],
    description: "A memorable trip to Singapore exploring the modern city, beautiful gardens, and diverse culture",
    image: "/images/blog/singapore/IMG_4839.png",
  },
  {
    id: "kaohsiung",
    title: "Kaohsiung 🇹🇼",
    location: "Taiwan",
    date: "2023",
    tag: ["All", "Travel"],
    description: "A memorable trip to Kaohsiung exploring the vibrant harbor city, modern architecture, and cultural sites",
    image: "/images/blog/kaohsiung/IMG_7389.png",
  },
  {
    id: "osaka",
    title: "Osaka 🇯🇵",
    location: "Japan",
    date: "2026",
    tag: ["All", "Travel"],
    description: "A memorable trip to Osaka & the Kansai region exploring vibrant streets, ancient temples, and exciting day trips to Kyoto and Nara",
    image: "/images/blog/osaka/IMG_0832.jpeg",
  }
];

const photosData = {
  taipei: [
    { src: "/images/blog/taipei/IMG_0011.jpg", title: "Morning Flight to Taipei", description: "The early morning flight to Taipei offered breathtaking views as we approached the island" },
    { src: "/images/blog/taipei/IMG_0025.jpg", title: "Boeing 787 Cabin", description: "My first time on a Boeing 787 - amazed by the spacious cabin and large windows with stunning sky views" },
    { src: "/images/blog/taipei/IMG_0034.jpg", title: "Airport Express Train", description: "The smooth and comfortable train ride from Taoyuan Airport to Taipei city center" },
    { src: "/images/blog/taipei/IMG_0054.jpg", title: "Taipei City View", description: "First glimpse of Taipei's cityscape from the train window" },
    { src: "/images/blog/taipei/IMG_0072.jpg", title: "Taipei Station", description: "The bustling Taipei Main Station - the transportation hub of the city" },
    { src: "/images/blog/taipei/IMG_0083.jpg", title: "City Exploration", description: "Exploring the vibrant streets and neighborhoods of Taipei" },
    { src: "/images/blog/taipei/IMG_0084.jpg", title: "Local Market", description: "Discovering local flavors at one of Taipei's traditional markets" },
    { src: "/images/blog/taipei/IMG_0086.jpg", title: "Street Food", description: "Sampling delicious Taiwanese street food from night market vendors" },
    { src: "/images/blog/taipei/IMG_0100.jpg", title: "Cultural Site", description: "Visiting one of Taipei's historical and cultural landmarks" },
    { src: "/images/blog/taipei/IMG_0166.jpg", title: "Scenic View", description: "Enjoying panoramic views of Taipei from a scenic viewpoint" },
    { src: "/images/blog/taipei/IMG_0211.jpg", title: "Memorable Moment", description: "A special moment captured during the Taipei adventure" },
  ],
  harbin: [
    { src: "/images/blog/harbin/IMG_7827.png", title: "Winter Landscape", description: "The stunning winter landscape of Harbin with snow-covered trees and buildings" },
    { src: "/images/blog/harbin/IMG_7837.png", title: "Ice Sculpture Park", description: "Exploring the famous Ice Sculpture Park with intricate ice carvings" },
    { src: "/images/blog/harbin/IMG_7890.png", title: "Local Cuisine", description: "Tasting traditional Harbin dishes and local specialties" },
    { src: "/images/blog/harbin/IMG_7892.png", title: "Street View", description: "The charming streets of Harbin with traditional architecture" },
    { src: "/images/blog/harbin/IMG_7893.png", title: "Cultural Site", description: "Visiting a historical cultural site in Harbin" },
    { src: "/images/blog/harbin/IMG_7899.png", title: "Ice Festival", description: "Experiencing the vibrant Harbin Ice Festival with colorful ice structures" },
    { src: "/images/blog/harbin/IMG_7914.png", title: "Snow Sculptures", description: "Marveling at the detailed snow sculptures created by talented artists" },
    { src: "/images/blog/harbin/IMG_7922.png", title: "Winter Activities", description: "Participating in fun winter activities in the snow-covered parks" },
    { src: "/images/blog/harbin/IMG_7934.png", title: "City Lights", description: "The beautiful city lights of Harbin illuminating the winter night" },
    { src: "/images/blog/harbin/IMG_7946.png", title: "Traditional Architecture", description: "Exploring Harbin's unique blend of traditional and modern architecture" },
    { src: "/images/blog/harbin/IMG_7970.png", title: "Winter Wonderland", description: "The magical winter wonderland that makes Harbin so special" },
  ],
  singapore: [
    { src: "/images/blog/singapore/IMG_4839.png", title: "Marina Bay Sands", description: "The iconic Marina Bay Sands hotel with its stunning rooftop infinity pool" },
    { src: "/images/blog/singapore/IMG_4887.png", title: "Gardens by the Bay", description: "Exploring the futuristic Supertree Grove and beautiful floral displays" },
    { src: "/images/blog/singapore/IMG_4905.png", title: "Singapore Flyer", description: "Riding the Singapore Flyer for panoramic views of the city skyline" },
    { src: "/images/blog/singapore/IMG_4934.png", title: "Merlion Park", description: "Visiting the famous Merlion statue, symbol of Singapore" },
    { src: "/images/blog/singapore/IMG_4968.png", title: "Chinatown", description: "Exploring the vibrant Chinatown with its traditional shops and temples" },
    { src: "/images/blog/singapore/IMG_5017.png", title: "Little India", description: "Experiencing the colorful culture and delicious food of Little India" },
    { src: "/images/blog/singapore/IMG_5044.png", title: "Sentosa Island", description: "Relaxing on the beautiful beaches of Sentosa Island" },
    { src: "/images/blog/singapore/IMG_5053.png", title: "Hawker Food", description: "Sampling delicious local dishes at a traditional hawker center" },
    { src: "/images/blog/singapore/IMG_5060.png", title: "Singapore Zoo", description: "Visiting the world-renowned Singapore Zoo with its natural habitats" },
    { src: "/images/blog/singapore/IMG_5077.png", title: "Orchard Road", description: "Shopping along the famous Orchard Road shopping district" },
    { src: "/images/blog/singapore/IMG_5117.png", title: "Universal Studios", description: "Enjoying thrilling rides and entertainment at Universal Studios Singapore" },
    { src: "/images/blog/singapore/IMG_5125.png", title: "Night View", description: "Admiring Singapore's stunning city lights at night" },
  ],
  kaohsiung: [
    { src: "/images/blog/kaohsiung/IMG_7389.png", title: "Kaohsiung Harbor", description: "The beautiful harbor of Kaohsiung with ships and waterfront views" },
    { src: "/images/blog/kaohsiung/IMG_7400.png", title: "Dome of Light", description: "Visiting the stunning Dome of Light, the world's largest glass artwork" },
    { src: "/images/blog/kaohsiung/IMG_7421.png", title: "Pier-2 Art Center", description: "Exploring the creative Pier-2 Art Center with unique installations" },
    { src: "/images/blog/kaohsiung/IMG_7425.png", title: "Lotus Pond", description: "The scenic Lotus Pond with its iconic dragon and tiger pagodas" },
    { src: "/images/blog/kaohsiung/IMG_7448.png", title: "85 Sky Tower", description: "The towering 85 Sky Tower offering panoramic city views" },
    { src: "/images/blog/kaohsiung/IMG_7459.png", title: "Love River", description: "A peaceful stroll along the beautiful Love River waterfront" },
    { src: "/images/blog/kaohsiung/IMG_7472.png", title: "Local Cuisine", description: "Tasting delicious local Kaohsiung dishes and seafood" },
    { src: "/images/blog/kaohsiung/IMG_7477.png", title: "Cultural Site", description: "Visiting one of Kaohsiung's historical cultural landmarks" },
    { src: "/images/blog/kaohsiung/IMG_7484.png", title: "Night Market", description: "Exploring the lively night markets of Kaohsiung" },
    { src: "/images/blog/kaohsiung/IMG_7497.png", title: "Modern Architecture", description: "Admiring Kaohsiung's contemporary architectural designs" },
    { src: "/images/blog/kaohsiung/IMG_7511.png", title: "City Park", description: "Relaxing in one of Kaohsiung's beautiful urban parks" },
    { src: "/images/blog/kaohsiung/IMG_7517.png", title: "Memorable Moments", description: "Capturing special moments during the Kaohsiung adventure" },
  ],
  osaka: [
    { src: "/images/blog/osaka/IMG_0832.jpeg", title: "Arriving at Kansai Airport", description: "Touchdown at Kansai International Airport, starting the Kansai adventure" },
    { src: "/images/blog/osaka/IMG_0853.jpeg", title: "Nipponbashi Bridge", description: "Walking across the iconic Nipponbashi Bridge in the heart of Dotonbori" },
    { src: "/images/blog/osaka/IMG_0859.jpeg", title: "Ebisu Bridge & Dotonbori", description: "The vibrant Dotonbori canal with its famous neon signs and bustling atmosphere" },
    { src: "/images/blog/osaka/IMG_0867.jpeg", title: "Tonbori River Walk", description: "Strolling along the Tonbori River Walk enjoying the evening city lights" },
    { src: "/images/blog/osaka/IMG_0956.jpeg", title: "Fushimi Inari Shrine", description: "Exploring the iconic vermilion torii gates at Fushimi Inari in Kyoto" },
    { src: "/images/blog/osaka/IMG_1030.jpeg", title: "Kiyomizu-dera", description: "Visiting the historic Kiyomizu-dera temple in the Higashiyama district of Kyoto" },
    { src: "/images/blog/osaka/IMG_1119.jpeg", title: "Sakurajima Area", description: "Taking in the waterfront views near the Sakurajima district of Osaka" },
    { src: "/images/blog/osaka/IMG_1134.jpeg", title: "Hogwarts at USJ", description: "Entering the magical world of Harry Potter at Universal Studios Japan" },
    { src: "/images/blog/osaka/IMG_1246.jpeg", title: "Hogsmeade Village", description: "Wandering through the snowy streets of Hogsmeade at Universal Studios Japan" },
    { src: "/images/blog/osaka/IMG_1354.jpeg", title: "Nara Park", description: "Encountering the friendly deer roaming freely around Nara Park near Todaiji Temple" },
    { src: "/images/blog/osaka/IMG_1434.jpeg", title: "Daikokucho Streets", description: "Exploring the lively streets and local vibes of the Daikokucho and Namba area" },
    { src: "/images/blog/osaka/IMG_1467.jpeg", title: "Tsutenkaku Tower", description: "The iconic Tsutenkaku Tower standing tall in the retro Shinsekai district" },
    { src: "/images/blog/osaka/IMG_1493.jpeg", title: "Shinsekai Market", description: "Wandering through the colorful Shinsekai Market beneath the Tsutenkaku Tower" },
    { src: "/images/blog/osaka/IMG_1501.jpeg", title: "Shinsekai Streets", description: "Soaking in the nostalgic Showa-era atmosphere of Shinsekai" },
    { src: "/images/blog/osaka/IMG_1521.jpeg", title: "Tsutenkaku South", description: "Another angle of the Tsutenkaku Tower from the bustling south street" },
    { src: "/images/blog/osaka/IMG_1555.jpeg", title: "Shitennoji Temple", description: "Visiting Shitennoji, one of Japan's oldest Buddhist temples in the Tennoji district" },
    { src: "/images/blog/osaka/IMG_1559.jpeg", title: "Rinku Town", description: "A final glimpse of the Kansai coastline at Rinku Town before heading to the airport" },
    { src: "/images/blog/osaka/IMG_1578.jpeg", title: "Farewell Kansai", description: "Wrapping up an unforgettable trip through Osaka, Kyoto, and Nara at Kansai Airport" },
]
};

const BlogSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  const filteredBlogs = blogData.filter((blog) =>
    blog.tag.includes(tag)
  );

  return (
    <>
      <section id="blog" className="mt-24">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Blog
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Travel"
            isSelected={tag === "Travel"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Exchange"
            isSelected={tag === "Exchange"}
          />
        </div>
        <ul className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredBlogs.map((blog, index) => (
            <li key={index}>
              <BlogCard
                title={blog.title}
                description={blog.description}
                imgUrl={blog.image}
                location={blog.location}
                date={blog.date}
                onClick={() => handleBlogClick(blog)}
              />
            </li>
          ))}
        </ul>
      </section>

      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          photos={photosData[selectedBlog.id]}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default BlogSection;
