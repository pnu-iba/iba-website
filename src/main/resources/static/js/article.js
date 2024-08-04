// 삭제 기능
const deleteButton = document.getElementById('delete-btn');

if (deleteButton) {
    deleteButton.addEventListener('click', event => {
        let id = document.getElementById('article-id').value;
        fetch(`/api/articles/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                alert('삭제가 완료되었습니다.');
                location.replace('/articles');
            });
    });
}

// 하이퍼링크 변환 함수
function transformLinks(text) {
    const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlPattern, url => {
        return `<a href="${url}" target="_blank">${url}</a>`;
    });
}

// 수정 기능
const modifyButton = document.getElementById('modify-btn');

if (modifyButton) {
    modifyButton.addEventListener('click', event => {
        const id = document.getElementById('article-id').value;
        const title = document.getElementById('title').value;
        const contentElement = document.getElementById('content');
        const content = contentElement.value;
        const formattedContent = transformLinks(content.replace(/\n/g, '<br>'));
        const category = document.getElementById('category').value;

        if (!title || title.trim() === '') {
            alert('제목은 필수 항목입니다.');
            return;
        }

        fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: formattedContent,
                category: category
            })
        })
        .then(response => {
            if (response.ok) {
                alert('수정이 완료되었습니다.');
                location.replace(`/articles/${id}`);
            } else {
                return response.json().then(data => {
                    alert(data.errorMessage || '수정 실패(글자 수 초과 및 기타)');
                });
            }
        });
    });
}

// 생성 기능
const createButton = document.getElementById('create-btn');

if (createButton) {
    createButton.addEventListener('click', event => {
        const title = document.getElementById('title').value;
        const contentElement = document.getElementById('content');
        const content = contentElement.value;
        const formattedContent = transformLinks(content.replace(/\n/g, '<br>'));
        const category = document.getElementById('category').value;

        if (!title || title.trim() === '') {
            alert('제목은 필수 항목입니다.');
            return;
        }

        fetch('/api/articles', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: formattedContent,
                category: category
            })
        })
        .then(response => {
            if (response.ok) {
                alert('등록 완료되었습니다.');
                location.replace('/articles');
            } else {
                return response.json().then(data => {
                    alert(data.errorMessage || '등록 실패(글자 수 초과 및 기타)');
                });
            }
        });
    });
}
