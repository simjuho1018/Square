window.onload = function() {
    displayPosts();
};

function submitPost() {
    const postInput = document.getElementById('postInput').value;
    if (!postInput.trim()) {
        alert('글 내용을 입력해주세요.');
        return;
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    // 각 게시글에 대한 고유 ID 생성을 위해 현재 시간을 사용
    const post = {id: new Date().getTime(), content: postInput};
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
    document.getElementById('postInput').value = ''; // 입력란 초기화
}

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.content;
        
        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() { deletePost(post.id); };
        li.appendChild(deleteButton);

        postList.appendChild(li);
    });
}

function deletePost(postId) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts = posts.filter(post => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts(); // 업데이트된 목록을 다시 표시
}

function addUserInfo() {
    // 입력 폼에서 이름과 제목을 가져옵니다.
    var userName = document.getElementById("userName").value;
    var title = document.getElementById("title").value;

    // 사용자 정보를 표시할 div를 찾습니다.
    var displayDiv = document.getElementById("userInfoDisplay");

    // 입력된 이름과 제목을 사용하여 새로운 텍스트를 생성합니다.
    var userInfoText = "이름: " + userName + ", 제목: " + title;

    // 새로운 p 태그를 생성하고, userInfoText를 추가합니다.
    var p = document.createElement("p");
    p.innerText = userInfoText;

    // 생성된 p 태그를 displayDiv에 추가합니다.
    displayDiv.appendChild(p);

    // 폼 입력 필드를 초기화합니다.
    document.getElementById("userInfoForm").reset();
}
