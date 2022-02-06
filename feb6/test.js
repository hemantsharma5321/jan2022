var all_posts=[
//    {
//        'title':"",
//        'date':"",
//        'content':"indian is great country"
//    }

];

function show(){
    var container=document.getElementById("container");
    container.innerHTML="";
for(var i=0;i<all_posts.length;i++){
    
    var posthtml=`<div class="post">
<h3 id="title">${all_posts[i]['title']}</h3>
<p id="date"><span>Published</span>${all_posts[i]['date']}</p> 
<div class="postbtns">
    <button id="delbtn" onclick="deletefn(${i})">Delete</button>
    <button id="previewbtn" onclick="preview(${i})">Preview</button>
    <button id="updatebtn" onclick="update">Edit</button>
</div>
</div>`;
    container.innerHTML+=posthtml;
}
}
function publish(){
    var title=document.getElementById("titleinput").value;
    var d=new Date()
    var date=d.getDate();
    var content=document.getElementById("contentinput").value;
    all_posts.push({
        'title':`${title}`,
        'date':`${date}`,
        'content':`${content}`
    });
    show();
}
function deletefn(index){
    all_posts.splice(index,index+1);
    show();
}
function showcreate(){
    let item=document.getElementById("createblog");
    let item2=document.getElementById("preview");
    item2.classList.add('dnone');
    item.classList.remove('dnone');
}
function preview(index){
    var item=document.getElementById("createblog");
    let item2=document.getElementById("preview");
    item.classList.add('dnone');
    item2.classList.remove('dnone');
    item2.innerHTML=`<h3 id="prevtitle">${all_posts[index]['title']}</h3>
    <span style="color:red" onclick="hideprev()">X</span>
    <p id="prevcontent">${all_posts[index]['content']}</p>`
}
function hideprev(){
    let item2=document.getElementById("preview");
    item2.classList.add('dnone');
}

