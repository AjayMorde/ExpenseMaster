const Expense=require('../connections/data');

const addExpense=async(req,res)=>{
    try{
        const amount = req.body.Amount;                   // from here i extracts  all properties 
        const description = req.body.Description;
        const category = req.body.Category;

        const {dataValues}=await Expense.create({         // here i create a new expense record in my database
            amount : amount ,
            description : description,
            category : category
        })

        res.status(200).json({Success: dataValues});      
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({failed: "Error Occurred"});
    }
}

module.exports={addExpense}