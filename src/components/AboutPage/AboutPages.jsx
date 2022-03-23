import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";
import Copyright from "../Copyright/Copyright.jsx";

const AboutPages = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Card sx={{ p: 2, margin: 0.5 }}>
        <div>
          <h1>About me</h1>
          <article>
            Originally graduated with an Mpharm degree and a few years’
            experience of community pharmacy and hospital pharmacy under my
            belt, I felt deep down that the career path I was on wasn’t the
            right fit. I decided that a new working environment that involved a
            more creative and yet still technically and mentally challenging
            role was my true calling, one in which I could see the fruits of my
            labor in front of me on a screen instead of a green prescription or
            pill box. I always had an interest and fascination in programming,
            practicing the basics of JavaScript, python, html, CSS on free
            learning websites, but Northcoders stood out to me for its industry
            led curriculum, giving true insights into what the most useful and
            sought-after programming skills are. Its teaching style of learning
            through programming and ‘doing’, rather than hours of lecturers, was
            one that I could very much appreciate and relate to my own style of
            learning. With the skills learned from my previous employment, which
            include vital skills such as; risk management, time management, root
            cause analysis and implementing my own knowledge with correctly
            sourced information to solve unique problems daily. These skills
            will help me in good stead to develop my future career and
            employers’ business forward.
          </article>
        </div>
      </Card>
      <Copyright />
    </>
  );
};

export default AboutPages;
