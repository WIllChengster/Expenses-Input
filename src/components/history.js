import React,{Component} from 'react';
import axios from 'axios'

class History extends Component{
    constructor(props){
        super(props)
        this.state={
            expenseData:{}
        }
    }

    // componentWillMount(){
    //     axios.get
    // }

    render(){
        return(
            <div >
                <h1 className="display-4 text-center">Expense History</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col" >Date</th>
                            <th scope="col" >Amount</th>
                            <th scope="col" >Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="head">1</th>
                            <td>11231</td>
                            <td>12312321</td>
                            <td>123123</td>
                        </tr>
                        <tr>
                            <th scope="head">1</th>
                            <td>11231</td>
                            <td>12312321</td>
                            <td>123123</td>
                        </tr>
                        <tr>
                            <th scope="head">1</th>
                            <td>11231</td>
                            <td>12312321</td>
                            <td>123123</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default History;