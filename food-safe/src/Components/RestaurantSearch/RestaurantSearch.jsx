import SearchResults from "../SearchResults/SearchResults";
import "./RestaurantSearch.scss";

function RestaurantSearch() {
	return (
		<section>
			<div className="restaurant-search">
				<h3>Search a Restaurant</h3>
				<form>
					<div className="search-field">
						<img src="/src/assets/search.svg" alt="search icon" />
						<input
							id="search"
							type="text"
							className="input"
							placeholder="Search"
						/>
					</div>
					<button className="button" type="submit">
						SUBMIT
					</button>
				</form>
			</div>
			<SearchResults />
			<div className="site-promo">
				<h4 className="promo-title">Why choose DineSafe?</h4>
				<div className="promotion-blocks">
					<div className="promo-block">
						<h4>Verified Hygiene Ratings</h4>
						<p>
							Access comprehensive hygiene reports and ratings from trusted
							health authorities.
						</p>
					</div>
					<div className="promo-block">
						<h4>Up-to-date Information</h4>
						<p>
							Stay informed with the latest health inspection results and
							compliance updates.
						</p>
					</div>
					<div className="promo-block">
						<h4>User Reviews and Feedback:</h4>
						<p>
							Read real reviews from fellow diners and share your own
							experiences.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RestaurantSearch;
