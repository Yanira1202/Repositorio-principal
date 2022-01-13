//debajo de agregar listener,delete
const.btnEdit = querySelectorAll(".btn-edit-post");
btnEdit.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        const id = e.target.dataset.id;
        OpenEdit(e,id,btn);
    })
}) 

function OpenEdit(e,id,buuton){
    let parent = button.parentNode;
    let textEdit = $(parent).children().eq(2);
    let btnEdit = $(parent).children().eq(3);
    textEdit.show();
    btnEdit.show();
    btnEdit.on("click",function(e){
        SaveUodate(e,id,textEdit.val())
    })
}
function SaveUpdate(e,id_post,text_new){
    e.preventDefault();
    debugger.collection("posts").doc(id_post).update({
        post: text_new,
    }).then(()=>{
        alert("post actualizado");
        readpost();
    })
    .catch((error)=>{
        alert("error:",error);
    })
}