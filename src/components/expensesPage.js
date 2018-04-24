import React, {Component} from 'react';

class ExpensesPage extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="jumbotron" >
                <h1 className="display-4 text-center">Enter your expense</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="date">Date of expense</label>
                        <input type="text" id="date" className="form-control" placeholder="Enter date of expense" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Amount Payed</label>
                        <input type="text" id="date" className="form-control" placeholder="Enter amount payed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Reason</label>
                        <input type="text" id="date" className="form-control" placeholder="Enter reason of expense" />
                    </div>
                    <button className="btn btn-primary">Save expense</button>
                </form>


            </div>
        )
    }
}

export default ExpensesPage