const reels = [
  {
    username: "alex_world",
    likeCount: 1240,
    isLiked: false,
    commentCount: 87,
    caption: "Sunset vibes 🌅",
    video: "./reels/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1729292486436-b0763866b61f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 45,
    isFollowed: true
  },
  {
    username: "travelwithmia",
    likeCount: 3021,
    isLiked: true,
    commentCount: 142,
    caption: "Exploring the mountains 🏔️",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1653379671605-0235d2ed6a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMG1vZGVsJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "tech_guru",
    likeCount: 985,
    isLiked: false,
    commentCount: 33,
    caption: "New gadget unboxing 📦",
    video: "./reels/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    shareCount: 19,
    isFollowed: true
  },
  {
    username: "foodielife",
    likeCount: 4512,
    isLiked: true,
    commentCount: 403,
    caption: "Best pasta ever! 🍝",
    video: "./reels/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    shareCount: 320,
    isFollowed: false
  },
  {
    username: "dancewithsam",
    likeCount: 7840,
    isLiked: false,
    commentCount: 910,
    caption: "Trying a new choreography 💃",
    video: "./reels/video5.mp4",
    userProfile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
    shareCount: 1120,
    isFollowed: true
  },
  {
    username: "daily_fitness",
    likeCount: 2100,
    isLiked: true,
    commentCount: 114,
    caption: "Simple morning workout routine 💪",
    video: "./reels/video6.mp4",
    userProfile: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
    shareCount: 89,
    isFollowed: false
  },
  {
    username: "pet_paradise",
    likeCount: 5693,
    isLiked: false,
    commentCount: 304,
    caption: "Cute puppy moment 🐶❤️",
    video: "./reels/video7.mp4",
    userProfile: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
    shareCount: 250,
    isFollowed: true
  },
  {
    username: "style_by_ana",
    likeCount: 1930,
    isLiked: true,
    commentCount: 95,
    caption: "Outfit of the day ✨",
    video: "./reels/video8.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww",
    shareCount: 76,
    isFollowed: true
  },
  {
    username: "carlover",
    likeCount: 8204,
    isLiked: false,
    commentCount: 512,
    caption: "Engine rev test 😍🔥",
    video: "./reels/video9.mp4",
    userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    shareCount: 600,
    isFollowed: false
  },
  {
    username: "nature_focus",
    likeCount: 1298,
    isLiked: true,
    commentCount: 61,
    caption: "Forest morning view 🌲✨",
    video: "./reels/video10.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    shareCount: 33,
    isFollowed: false
  }
];

var allReels = document.querySelector('.all-reels');

function addData(){
  var sum =''
reels.forEach((elem,idx)=>{

    sum = sum + `<div class="reel">
                    <video autoplay loop muted src=".${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="img">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                    </div>
                </div>`

})




allReels.innerHTML = sum 
}


addData()


allReels.addEventListener('click',(dets)=>{
  reels[dets.target.id].likeCount++
  reels[dets.target.id].isLiked = true;

  addData()
})