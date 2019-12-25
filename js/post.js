function addComments(id){
    var comment = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('postedComments').innerHTML += '<p class="commentStyle">'+comment+'</p>';          
    a.value=a.defaultValue;
}


var numberOfClicks=0;
    
function postLiked(){
    document.getElementById("likeBlogBtn").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
    if (numberOfClicks==1){
    document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
    }
    else {
    document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
            }
        }
    }