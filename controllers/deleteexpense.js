const Expense = require('../connections/data');


const deleteExpense = async (req, res) => {
  try {
    const userId = req.params.id;                            // here extracts the id parameter from the request URL parameter
    console.log("------------>"+req.params.id);
    const data = await Expense.findByPk(userId);             // here i find an expense record by its primary key
    if (!data) {
      res.status(400).json({ Error: "Record Not Found" });
      return;
    }
    let destroy = await data.destroy();
    res.status(200).json({ Data: destroy });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({ failed: "Error Occurred" });
  }
}

module.exports =  {deleteExpense}