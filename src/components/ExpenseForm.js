import React from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
const now = moment();
console.log(now.format('MMM Do, YYYY'))
class ExpenseForm extends React.Component{
    state={
        description:'',
        note:'',
        amount:'',
        createdAt:moment(),
        calendarFocused:false

    }
    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    };
    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}));
    };
    onDescriptionChange = (e)=>{
        const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
        
    };
    onDateChange = (createdAt) =>{
        this.setState(()=>({createdAt}))
    };
    onFocusChange = ({focused}) =>{
        console.log(focused)
        this.setState(()=>({calendarFocused:focused}))
    };
    render(){
        return(
            <div>
                <form>
                    <input 
                    type='text'
                    placeholder='Description'
                    autoFocus 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>

                    <input 
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onDescriptionChange}
                     />
                     <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1} 
                        isOutsideRange={()=>false}
                    />

                     <textarea
                        placeholder="Add a note for your expense."
                        onChange={this.onNoteChange}
                        >
                     </textarea>
                     <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;