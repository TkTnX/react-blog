import React from "react";

const tags = [
  "Business",
  "Freelance",
  "Money",
  "Experience",
  "Lifestyle",
  "SEO",
  "Wordpress",
  "Marketing",
  "UX",
  "Modern",
  "Success",
  "Nature",
  "Productivity",
  "Sales page",
  "Sell",
  "Teamwork",
  "Monetize",
];

const NewsTags: React.FC = () => {
  return (
    <div className="max-w-64 mt-14">
      <h3 className="title-3">Tags</h3>

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li
            className="py-2 px-4 bg-gray-100  hover:opacity-80 transition-all"
            key={index}
          >
            <a href="#!">{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsTags;
