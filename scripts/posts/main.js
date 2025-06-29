import { GetYtVideoSection } from "./video.js"
import { GetPostSection } from "./post.js"
const videoType = "video"
const imageType = "image"
function LoadPosts() {
    let container = document.getElementById("posts")
    fetch('data/posts.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                if (post.type == videoType) {
                    container.appendChild(GetYtVideoSection(post.id, post.title, post.description, post.url))
                } else if (post.type == imageType) {
                    container.appendChild(GetPostSection(post.id, post.title, post.url))
                }

            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

}


document.addEventListener("DOMContentLoaded", () => {
    LoadPosts();
});