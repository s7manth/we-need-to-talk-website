type VideoMetadata = {
  link: string;
  title: string;
  index: number;
  description: string;
};

const youtubedata: VideoMetadata[] = [
  {
    link: "https://www.youtube.com/embed/kjFNX8XLBtw",
    title: "Episode 1: Sports and Emotions",
    index: 1,
    description: "In the debut episode, we share about topics that we are passionate about. We start off with talking about sports, and how it impacts our lives and learnings. Also, we also cover about human emotions and the power of expression.",
  },
  {
    link: "https://www.youtube.com/embed/tn19FX8ZkMU",
    title: "Episode 2 Part One: The Search Of Belongingness",
    index: 2,
    description: "In this episode, we focus on our experiences of leaving home, studying, and working abroad. We touch on the dilemmas of the human mind.",
  },
  {
    link: "https://www.youtube.com/embed/tn19FX8ZkMU",
    title: "Episode 2 Part Two: Intoxications of (Nice) People",
    index: 3,
    description: "In this episode, we discuss and contemplate on human intoxications and what drives humans to resort to such intoxications. Moreover, we focus more on the aspects of duty and discipline, and compare them to will and motivation.",
  },
  {
    link: "https://www.youtube.com/embed/rEe530cGLKs",
    title: "Episode 3 Part One: Our Favorite Movies",
    index: 4,
    description: "In this episode, we take a break from the heavy discussions and talk a bit about our shared favourite source of entertainment, watching movies. We share about our favourite movies and their creators, and give suggestions on what are viewers should watch next. Obviously, along with our next video.",
  },
];

youtubedata.sort((a: VideoMetadata, b: VideoMetadata) => b.index - a.index);
export default youtubedata;
