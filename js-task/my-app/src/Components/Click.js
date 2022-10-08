import { useState } from "react";

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <div className="container">
        <p>
          A listing page is the public view of a listing. It should be designed
          to display all relevant information about a listing.
        </p>
        <p>Criteria:</p>
        <ul>
          <li>
            A should be displaying all the information <span> <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              onClick={handleClick}
            />
          </span> related to the listing
            that user has created.
          </li>
          <li>
            A listing page should only be visible to any user if the listing has
            status: Published.
          </li>
          <li>
            A listing page need to be SEO optimised to have meta tags for title,
            short description and image.
          </li>
          <li>
            A listings owners should be a link to their profile page, eg.&nbsp;
            <code>/profile/kansuler</code>&nbsp;if that user is owner of the
            project this listing is part of.
          </li>
          <li>
            A listing page should also display links to other listings that are
            part of the same project. Those listings should be displayed as
            &quot;Related listings&quot;.
          </li>
          <li>
            The url to a listing page should follow the pattern of the generated
            slug for that listing eg.&nbsp;<code>/listing/my-listing</code>
          </li>
          <li>
            If the user is an admin, also display an admin link to that listings
            edit page.
          </li>
        </ul>
        

        {isShown && (
          <div className="clickk">
            <p>Facts provided or learned about something or someone.</p>
          </div>
        )}

        {/* 👇️ show component on click */}
        {isShown}
      </div>
    </div>
  );
}

function Box() {
  return (
    <div>
      
    </div>
  );
}
