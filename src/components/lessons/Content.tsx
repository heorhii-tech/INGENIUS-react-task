import React, { FC } from "react";
import { ContentProps } from "../../types/types";

const Content: FC<ContentProps> = ({ content }) => {
  if (!content) {
    return <h4>No content available</h4>;
  }

  switch (content.type) {
    case "text":
      return <h4 className="content_title">{content.data}</h4>;

    case "video":
      return (
        <div className="video">
          <iframe
            width="100%"
            height={"300"}
            className="content_video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={content.data}
          ></iframe>
        </div>
      );

    case "audio":
    case "podcast":
      return (
        <div className="content_audio">
          <audio controls>
            <source src={content.data} type="audio/mpeg" />
          </audio>
        </div>
      );

    default:
      return <h4>Unsupported content type</h4>;
  }
};

export default Content;
