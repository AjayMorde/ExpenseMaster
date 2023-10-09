myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (amount.value === '' || description.value === '' || category.value === '') {
        alert('Please enter all fields');
    }
    else {

        const details = {
            Amount: amount.value,
            Description: description.value,
            Category: category.value,
        };
        axios.post("http://localhost:3000/expense/add-expense", details).
            then(({ data }) => {
                const ID = data.Success.id
                console.log("this is the ucces is---------------------------------------->"+data.Success.id)
                // addonedetail(ID);
                alert('Details Successfully Saved!');
            })
            .catch((err) => {
                console.error(err);
                alert("Duplicate Entry Found, Please Register Again!")
            });
    }
}
