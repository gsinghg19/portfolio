import * as React from "react";
import { useEffect, useState } from "react";

export default function RandomImageSelector() {
  const [images, setImages] = useState([]);

  function randomImage() {
    var images = [],
      index = 0;
    images[0] =
      "<a href = 'https://image.shutterstock.com/image-photo/software-source-code-programming-on-600w-634574354.jpg'><img src='https://image.shutterstock.com/image-photo/software-source-code-programming-on-600w-634574354.jpg' alt='Visit Computer Hope'></a>";
    images[1] =
      "<a href = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'><img src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80' alt='Computer History'></a>";
    images[2] =
      "<a href = 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'><img src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80' alt='Visit Computer Hope'></a>";
    index = Math.floor(Math.random() * images.length);
    document.write(images[index]);
  }
}
