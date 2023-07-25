
import React from "react";
import pic from "../Images/pic.jpg"; // Correct path to the image file

const Home = () => {
  // Define a style object for the paragraph
  const paragraphStyle = {
    background: `url(${pic}) center/cover no-repeat`, // Set the background image
    padding: "1rem", // Add some padding for better readability
    color:"purple   ",
  };

  return (
    <div>
      <p className="p-4" style={paragraphStyle} >
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
      </p>
      {/* <img src={pic} alt="Picture" /> */}
    </div>
  );
};

export default Home;
