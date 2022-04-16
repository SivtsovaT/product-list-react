import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler =(selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear}
                           onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense) => {
                return <ExpenseItem title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}/>
            })}

        </Card>
    )
}

export default Expenses;