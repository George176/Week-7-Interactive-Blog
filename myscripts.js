//Get information from form and put onto webpage.
function analyseBlog() {
    const title = document.createElement("h1"); title.innerHTML = document.getElementById("blog-title").value.toUpperCase(); document.getElementById("h1-blog-title").appendChild(title);
    const author = document.createElement("h3"); author.innerHTML = `blog written by ${document.getElementById("author").value}`; document.getElementById("h3-author").appendChild(author);
    const body = document.createElement("p"); body.innerHTML = document.getElementById("blog-body").value; document.getElementById("p-blog-body").appendChild(body);
    return false;
}
//Get information from form and put into email.
function SendMail() {
    var body = document.getElementById("ebody").value;
    var SubjectLine = document.getElementById("esubject").value;
    window.location.href = "mailto:hi@landrover.com?subject=" + SubjectLine + "&body=" + body;
}
//The light/dark mode toggle function.
function toggle() {
    const btn = document.getElementById("btn");
    const elements = document.querySelectorAll(".dark");
    btn.addEventListener("click", () => { elements.forEach((el) => { el.classList.toggle("mode"); }); });
    const delements = document.querySelectorAll(".darkHover");
    btn.addEventListener("click", () => { delements.forEach((el) => { el.classList.toggle("mode"); }); });
    const whiteOutline = document.querySelectorAll(".whiteOutline");
    btn.addEventListener("click", () => { whiteOutline.forEach((el) => { el.classList.toggle("mode"); }); });
}
let download = () => {
    // Get the data from each element on the form.
    const title = document.getElementById('blog-title');
    const author = document.getElementById('author');
    const body = document.getElementById('blog-body');

    if (title.value === "") { alert("Blog Title required.") } else if (author.value === "") { alert("Blog author required.") } else if (body.value === "") { alert("Blog body required.") } else {

        // This variable stores all the data.
        let data =
            `Blog title: ${title.value}\r\nBlog author: ${author.value}\r\nBlog body: ${body.value}`;
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'blogFormData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click();
    }
}
//Upload file.
function upload() {
    let input = document.querySelector('input');
    let textarea = document.querySelector('textarea');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            const file = e.target.result;
            const lines = file.split(/\r\n|\n/);
            textarea.value = lines.join('\n');
        };
        reader.onerror = (e) => alert(e.target.error.name);
        reader.readAsText(file);
    });
}
