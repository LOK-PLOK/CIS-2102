const Announcement = ({announcement}) => {
    return (
        <div className="shadow-announcement mb-8 rounded-md p-3" >
                <p className="text-ann-header font-bold text-2xl">{announcement.name}</p>
                <p>Email: {announcement.email}</p>
                <p>Post ID: {announcement.postId}</p>
                <p>ID: {announcement.id}</p>
                <p className="font-bold textxl">Body: {announcement.body}</p>
            </div>
    )
}

export default Announcement