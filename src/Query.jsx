import { useQuery } from "@tanstack/react-query";
const Query = () => {
    const {
        data: comments,
        isloading,
        error,
    } = useQuery({
        queryFn: () =>
            fetch(
                "https://jsonplaceholder.typicode.com/comments?_limit=10"
            ).then((res) => res.json()),
        queryKey: ["comments"],
    });
    // console.log(comments);
    if (isloading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <div>Error: error fetching</div>;
    }
    return (
        <div>
            <h1>Email Address of users</h1>
            {comments &&
                comments.map((comment) => (
                    <h2 key={comment.id} className="users">
                        <p>ID:{comment.id}</p>
                        <p> Email:{comment.email}</p>
                        <p>Name: {comment.name}</p>
                    </h2>
                ))}
        </div>
    );
};
export default Query;
