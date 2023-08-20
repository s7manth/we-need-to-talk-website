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
    description:
      "In the debut episode, we share about topics that we are passionate about. We start off with talking about sports, and how it impacts our lives and learnings. Also, we also cover about human emotions and the power of expression.",
  },
  {
    link: "https://www.youtube.com/embed/tn19FX8ZkMU",
    title: "Episode 2 Part One: The Search Of Belongingness",
    index: 2,
    description:
      "In this episode, we focus on our experiences of leaving home, studying, and working abroad. We touch on the dilemmas of the human mind.",
  },
  {
    link: "https://www.youtube.com/embed/tn19FX8ZkMU",
    title: "Episode 2 Part Two: Intoxications of (Nice) People",
    index: 3,
    description:
      "In this episode, we discuss and contemplate on human intoxications and what drives humans to resort to such intoxications. Moreover, we focus more on the aspects of duty and discipline, and compare them to will and motivation.",
  },
  {
    link: "https://www.youtube.com/embed/rEe530cGLKs",
    title: "Episode 3: Our Favorite Movies",
    index: 4,
    description:
      "In this episode, we take a break from the heavy discussions and talk a bit about our shared favourite source of entertainment, watching movies. We share about our favourite movies and their creators, and give suggestions on what are viewers should watch next. Obviously, along with our next video.",
  },
  {
    link: "https://www.youtube.com/embed/WRnAcQ7l8WI",
    title: "Episode 4 Part One: Being Learned v/s Being Educated",
    index: 5,
    description:
      "In this epsiode, we ponder upon the idea of learning and education. How do they differ, and what are the elements that separate both of them?"
  },
  {
    link: "https://www.youtube.com/embed/GrZ-xJvGt_U",
    title: "Episode 4 Part Two: Religion and Spirituality",
    index: 6,
    description: 
      "In this episode, we think about the differences between religion and spirituality. Are they both related to one another? What are our experiences with it? Should we consider them when taking decisions in life? Watch the episode to find out!",
  },
];

youtubedata.sort((a: VideoMetadata, b: VideoMetadata) => b.index - a.index);
export default youtubedata;
