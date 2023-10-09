const Expense = require('../connections/data');

const getAllExpense = async (req, res) => {
    try {
        const data = await Expense.findAll();          // this will retrieve all expense records from the my db

        res.status(200).json({ data: data })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ failed: "Error Occurred" });
    }
}

module.exports = { getAllExpense }