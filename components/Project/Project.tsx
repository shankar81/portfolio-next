import { useRouter } from "next/router";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import classes from "./Project.module.css";

type ProjectProps = {
  data: { title: string; images: Array<string>; link: string };
};

const Project: React.FC<ProjectProps> = ({ data }) => {
  const router = useRouter();

  const { images, title, link } = data;

  // Only allowed 4 images to show
  const previewImages = images;
  previewImages.length = 4;

  function handleNavigate() {
    window.open(link);
  }

  return (
    <div className={classes.container}>
      <div className={classes.preview}>
        {previewImages.map((el, index) => {
          return (
            <div key={index} className={classes.imgContainer}>
              <img
                className={classes.image}
                alt={title}
                src={el}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      <div className={classes.content}>
        <h3 onClick={handleNavigate} className={classes.title}>
          {title}
        </h3>
        <RiExternalLinkLine color="#2c6291" />
      </div>
    </div>
  );
};

export default Project;
