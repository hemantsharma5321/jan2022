var all_posts=[
   {
       'title':"india",
       'date':"02-06-2022",
       'content':"indian is great country"
   },
   {
    'title':"india",
    'date':"02-06-2022",
    'content':"indian is great country"
},
{
    'title':"india",
    'date':"02-06-2022",
    'content':"indian is great country"
},
{
    'title':"india",
    'date':"02-06-2022",
    'content':"indian is great country"
}

];

for(let i=0;i<all_posts.length;i++){
    var container=document.getElementById("container");
    
    var post=document.createElement("div");
    post.classList.add("post");
    var title=document.createElement("h3");
    
    var date=document.createElement("p");
    var postbtns=document.createElement("div");
    postbtns.classList.add("postbtns");
    var delbtn=document.createElement("button");
    var updatebtn=document.createElement("button");
    var previewbtn=document.createElement("button");
    delbtn.innerText="delete";
    updatebtn.innerText="Update";
    previewbtn.innerText="preview";
    title.innerText=all_posts[i].title;
    date.innerText=all_posts[i].date;
    post.append(title,date);
    postbtns.append(delbtn,updatebtn,previewbtn);
    container.append(postbtns,post); 
     
}


function publish(){
    var title=document.getElementById("titleinput").value;
    var d=new Date();
    var date=d.getDate();
    var content=document.getElementById("contentinput").value;

    all_posts.push({
        'title':{title},
        'date':date,
        'content':content
    })

}