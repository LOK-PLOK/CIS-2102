import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnnouncementDetails = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setAnnouncement(json);
      });
  }, [id]);

  console.log(announcement);

  if (!announcement) {
    return <div>loading...</div>;
  }

  return (
    <div className="shadow-announcement mb-8 rounded-md p-3">
      <p className="text-ann-header font-bold text-2xl">{announcement.name}</p>
      <p>Email: {announcement.email}</p>
      <p>Post ID: {announcement.postId}</p>
      <p>ID: {announcement.id}</p>
      <p className="font-bold textxl">Body: {announcement.body}</p>
    </div>
  );
};

export default AnnouncementDetails;
