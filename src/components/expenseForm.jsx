import React from 'react'

const ExpenseForm = ({ categories, currentExpense, setCurrentExpense, onSubmit, updating, onUpdate}) => {
    

    return <div className='my-5'>
        <form>
            <div className="mb-3 col-8">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" onChange={(event)=>setCurrentExpense({...currentExpense, description:event.target.value})} value={currentExpense.description}/>
            </div>
            <div className='row'>
                <div className="mb-3 col-3">
                    <label className="form-label">Amount</label>
                    <input type="text" className="form-control" onChange={(event)=>setCurrentExpense({...currentExpense, amount:parseInt(event.target.value)})} value={currentExpense.amount}/>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label">Category</label>
                    <select className="form-select" onChange={(event)=>setCurrentExpense({...currentExpense, category:event.target.value})} value={currentExpense.category}>
                        <option value=''>Select Category...</option>
                        {categories.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
            </div>
            {!updating && <button type="submit" className="btn btn-primary" onClick={(event)=>onSubmit(event,currentExpense)}>Submit</button>}
            {updating && <button type="button" className="btn btn-primary" onClick={()=>onUpdate(currentExpense)}>Update</button>}
        </form>
    </div>
}

export default ExpenseForm