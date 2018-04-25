import React,{Component} from 'react';
import axios from 'axios'

class History extends Component{
    constructor(props){
        super(props)
        this.state={
            expenseData:[]
        }
    }

    componentDidMount(){
        axios.get('/api/data').then(res=>{
            console.log(res)
            this.setState({
                expenseData: res.data
            })
        })
    }
    // componentWillUpdate(){
    //     axios.get('/api/data').then(res=>{
    //         console.log(res)
    //         this.setState({
    //             expenseData: res.data
    //         })
    //     })
    // }

    render(){
        console.log(this.state)
        const expenseRow = this.state.expenseData.map((item, index) => {
            console.log(item)

                return(
                    <tr key={index} >
                        <th scope="head">{index+1}</th>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                        <td>{item.reason}</td>
                    </tr>
                )
            

        })

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
                        {expenseRow}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default History;