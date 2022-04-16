import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler =(selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense) => {
                return <ExpenseItem title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}/>
            })}

        </div>
    )
}

export default Expenses;