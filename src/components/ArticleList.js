import react from "react";
import Article from "./Article";


function ArticleList(props){
    const getPosts= props.post.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return(
        <main>
            {getPosts}
        </main>
    )
}

export default ArticleList