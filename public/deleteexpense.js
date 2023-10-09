function onDelete() {
    const div = this.parentNode;

    axios.delete(`http://localhost:3000/expense/delete-expense/${this.id}`)
        .then(res => {
            console.log(res);
            alert("Selected User Details has been removed from Database!");
        })
        .catch(err => console.error(err));

    div.remove();
}

function onEdit(e) {
    e.preventDefault();
    const div = this.parentNode;
    const name = this.parentNode.childNodes[0].nodeValue.trim();
    const details = JSON.parse(localStorage.getItem(name));
    amount.value = name;
    description.value = details.Description;
    category.value = details.Category;
    localStorage.removeItem(name);
    div.remove();
}
