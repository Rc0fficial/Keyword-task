import React from 'react'

function Main() {
  
  return (
    <div className='container'>
      <div className="box"></div>
        <div className="para">
        <p>A listing page is the public view of a listing. It should be designed to display all relevant information about a listing.</p>
        <p>Criteria:</p>
        </div>
        <div className='list'>
        <ul >
				<li>A should be displaying all the information related to the listing that user has created.</li>
              <span><div className="box"></div> </span>  
				<li>A listing page should only be visible to any user if the listing has status: Published.</li>
				<li>A listing page need to be SEO optimised to have meta tags for title, short description and image.</li>
				<li>A listings owners should be a link to their profile page, eg.&nbsp;<code>/profile/kansuler</code>&nbsp;if that user is owner of the project this listing is part of.</li>
				<li>A listing page should also display links to other listings that are part of the same project. Those listings should be displayed as &quot;Related listings&quot;.</li>
				<li>The url to a listing page should follow the pattern of the generated slug for that listing eg.&nbsp;<code>/listing/my-listing</code></li>
				<li>If the user is an admin, also display an admin link to that listings edit page.</li>
			</ul>
            </div>
    </div>
  )
}

export default Main