import React, {useState} from "react";
import './ExpenseItem.css';
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const updateTitle = () => {
        setTitle('Updated');
    }

    return (
        <Card className="expense-item">
           <ExpensesDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={updateTitle}>Update Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;