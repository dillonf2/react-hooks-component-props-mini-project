import react from "react";
import Article from "./Article";


function ArticleList({ post }){
    const getPosts= post.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return(
        <main>
            {getPosts}
        </main>
    )
}

export default ArticleList