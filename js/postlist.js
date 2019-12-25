function deletePost(element) {
        var parent= element.parentElement.parentElement.parentElement;
        parent.parentElement.removeChild(parent);

}

function redirectToPosts() {
    window.location.href = "post.html";
}