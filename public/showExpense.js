document.addEventListener('DOMContentLoaded', getdata)

function getdata() {
    axios.get("http://localhost:3000/expense/get-expense")  // here i make a get request
        .then(({ data }) => {
            // console.log("------------------------>>>>>>>>>"+data);
            // console.log(data.data.length);
            for (let i = 0; i < data.data.length; i++) {                      
                let div = document.createElement('div');
                div.className = "new-div";
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute('id', data.data[i].id);  
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener('click', onDelete);

                div.appendChild(document.createTextNode(data.data[i].amount));
                div.appendChild(document.createTextNode(" ---- " + data.data[i].category + "----"));
                div.appendChild(document.createTextNode(data.data[i].description + " "));




                div.appendChild(deleteButton);

                let editButton = document.createElement("button");
                editButton.textContent = "Edit";
                div.appendChild(editButton);
                div.lastChild.addEventListener('click', onEdit);
                deleteButton.className = "delete-button";
                editButton.className = "edit-button";



                myForm.after(div);
            }
        }).catch(err => console.error(err))
}