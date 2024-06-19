import "./SearchResults.scss";

const results = [
	{
		name: "O'Connors",
		address: "123 Main St.",
		type: "Take Out",
		status: "PASS",
		severity: "",
		details: "infraction details here",
		date: "",
		action: "",
		outcome: "",
		fine: "",
	},
	{
		name: "Burger-joint",
		address: "123 Fake St.",
		type: "Sit-down",
		status: "FAIL",
		severity: "severe",
		details: "BUGS!",
		date: "06-19-2024",
		action: "",
		outcome: "",
		fine: "",
	},
];

function SearchResults() {
	return (
		<div className="search-results">
			<h4>Results</h4>
			<table className="results-table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Address</th>
						<th scope="col">Type</th>
						<th scope="col">Status</th>
						<th scope="col">Severity</th>
						<th scope="col">Details</th>
						<th scope="col">Date</th>
						<th scope="col">Action</th>
						<th scope="col">Outcome</th>
						<th scope="col">Fine</th>
					</tr>
				</thead>
				<tbody>
					{results && results.length > 0 ? (
						results.map((result, index) => (
							<tr key={index}>
								<th scope="row">{result.name}</th>
								<td>{result.address}</td>
								<td>{result.type}</td>
								<td>{result.status}</td>
								<td>{result.severity}</td>
								<td>{result.details}</td>
								<td>{result.date}</td>
								<td>{result.action}</td>
								<td>{result.outcome}</td>
								<td>{result.fine}</td>
							</tr>
						))
					) : (
						<p>There are no results!</p>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default SearchResults;
