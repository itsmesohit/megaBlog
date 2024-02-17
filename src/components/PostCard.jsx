import React from "react";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, content }) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;

  // Extract text content from the temporary div
  let postPreview = tempDiv.textContent || tempDiv.innerText;

  // Truncate the text to the first 30 characters
  postPreview = postPreview.substring(0, 100);
  return (
    <Link>
      <div className="w-[320px] rounded-md border bg-gray-100 p-4">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt="Laptop"
          className="h-[200px] p-2 w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="mt-3 text-sm text-gray-600">
          {postPreview}
          </p>
          <Link to={`/post/${$id}`}>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-5 py-1.5 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            > 
              Read More
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
