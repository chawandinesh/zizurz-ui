import React from "react";

const ContentPartTwo = () => {
  return (
    <div className="list__wrap__container">
      <ul>
        {[
          {
            image: "https://freewebsitetemplates.com/preview/hairstylesalon/images/hairstyle17.jpg",
            title: "Best Hairstylists",
          },
          {
            image: "https://freewebsitetemplates.com/preview/hairstylesalon/images/hairstyle18.jpg",
            title: "Featured Hairstyle",
          },
          {
            image: "https://freewebsitetemplates.com/preview/hairstylesalon/images/hairstyle19.jpg",
            title: "Hair Care",
          },
          {
            image: "https://freewebsitetemplates.com/preview/hairstylesalon/images/hairstyle20.jpg",
            title: 'We "Hair" You',
          },
        ].map((e, idx) => (
          <li key={idx}>
            <div className="list__image__container">
              <img alt={`sample_image` + idx} src={e.image} />
            </div>
            <div className="title__description">
              <span>{e.title}</span>
              <p>
                Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your
                website! This is just a place holder, so you can see what the site would look like.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentPartTwo;
