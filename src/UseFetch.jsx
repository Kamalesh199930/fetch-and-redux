import useFetch from "react-fetch-hook";
const UseFetch = () => {
    const {
        data: posts,
        isLoading,
        error,
    } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <div>Error:error fetching </div>;
    }
    const firstTenPosts = posts.slice(0, 10);
    return (
        <div>
            <h1>Post of Users</h1>

            {firstTenPosts.map((post) => (
                <div key={post.id} className="card">
                    <p>{post.id}</p>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};
export default UseFetch;
