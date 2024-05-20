// src/QuarterlyReport.js
import React from 'react';

const QuarterlyReport = ({ sales = [], salespersons = [] }) => {
    if (!Array.isArray(sales) || !Array.isArray(salespersons)) {
        return <div>Error: Sales or Salespersons data is invalid</div>;
    }

    return (
        <div>
            <h2>Quarterly Report</h2>
            <ul>
                {sales.map((sale) => (
                    <li key={sale.id}>
                        {/* Display relevant information about the sale */}
                        Sale ID: {sale.id}, Amount: {sale.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuarterlyReport;
