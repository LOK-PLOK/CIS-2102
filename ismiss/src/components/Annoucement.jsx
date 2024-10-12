import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Announcement = ({ announcement }) => {
  return (
    <div className="shadow-announcement mb-8 rounded-md p-3">
      <Link to={`/Annoucements/${announcement.id}`}>
        {" "}
        <p className="text-ann-header font-bold text-2xl">
          {announcement.name}
        </p>{" "}
      </Link>
      <p>Email: {announcement.email}</p>
      <p>Post ID: {announcement.postId}</p>
      <p>ID: {announcement.id}</p>
      <p className="font-bold textxl">Body: {announcement.body}</p>
    </div>
  );
};

export default Announcement;
