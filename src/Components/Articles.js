import React, { useEffect,useState } from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const payload = await fetch('https://jsonplaceholder.typicode.com/posts');
            const articles = await payload.json();
            setArticles(articles);
        }, 3000);
    }, [])

    return (
        <div style={{flexGrow: 5, maxWidth: 500}}>
            <h2>Articles</h2>

            {articles && articles.map(article => (
                <div key={article.id}>
                    <h4>{article.title}</h4>
                    <hr/>
                </div>
            ))}

            {!articles && [1,2,3,4,5].map(article => <SkeletonArticle key={article}/>)}
        </div>
    )
}

export default Articles;