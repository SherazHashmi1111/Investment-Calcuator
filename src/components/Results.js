import React from 'react'
import './Results.css'

function Results(props) {
    return (
        <table className="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead> 
            <tbody>
            <tr>
                <td>YEAR NUMBER</td>
                <td>TOTAL SAVINGS END OF YEAR</td>
                <td>INTEREST GAINED IN YEAR</td>
                <td>TOTAL INTEREST GAINED</td>
                <td>TOTAL INVESTED CAPITAL</td>
            </tr>
            {props.data.map(data => (
            <tr>
                <td>{data.year}</td>
                <td>{Math.floor(data.savingEndOfYear)}</td>
                <td>{Math.floor(data.yearlyInterest)}</td>
                <td>{Math.floor(data.yearlyInterest)}</td>
                <td>{data.yearlyContribution}</td>
            </tr>
            ))}
            </tbody>
    </table>
  )
}
				
				
export default Results