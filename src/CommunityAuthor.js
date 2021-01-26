import React from 'react';

const CommunityAuthor = ({ name, role, imageUrl, twitterUrl, instagramUrl, githubUrl, description }) => {
  return (
    <>
      <h3 className="communitySection">{role}</h3>
      <div className="authorSection">
        <div className="authorImg">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="authorDetails">
          <div className="authorName">
            <strong>{name}</strong>
            {twitterUrl ? (
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                {/* <img
                  src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-icon.svg"
                  alt="Twitter Icon"
                  aria-label="Twitter"
                /> */}
              </a>
            ) : null}
            {instagramUrl ? (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                {/* <img
                  src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-icon.svg"
                  alt="Twitter Icon"
                  aria-label="Twitter"
                /> */}
              </a>
            ) : null}
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                {/* <img
                  src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/github-icon.svg"
                  alt="Github Icon"
                  aria-label="Github"
                /> */}
              </a>
            ) : null}
          </div>
          <div className="authorDesc">{description}</div>
        </div>
      </div>
    </>
  );
};

export default CommunityAuthor;
