/* eslint-disable react/prop-types */
import styles from "./Home.module.css"
import { useState } from 'react';
import appFirebase from "../../credenciales"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(appFirebase);

function Home ({correUsuario}){
    const [postContent, setPostContent] = useState('');
    const [posts, setPosts] = useState([]);

    const handlePostSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            content: postContent,
            email: correUsuario,
            date: new Date().toLocaleString()
        };
        setPosts(prevPosts => [...prevPosts, newPost]);
        setPostContent('');
    };

    return(
        <>
            <h1 className={styles.cerrar}>¡Bienvenido{correUsuario}! <button className={styles.btncerrar} onClick={() => signOut(auth)}>Cerrar Sesión</button></h1>
            <form className={styles.contenedor} onSubmit={handlePostSubmit}>
                <textarea
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                    placeholder="Escribe tu post aquí..."
                    rows={4}
                    cols={50}
                />
                <br />
                <button className={styles.publicar} type="submit">Publicar</button>
            </form>
          
            <div>
                <h2>Posts:</h2>
                <div className={styles.caja}>
                    {posts.map((post, index) => (
                        <p key={index}>
                            <h2>{post.email}</h2>  {post.date} {post.content}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
