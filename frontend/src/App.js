import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdateBlog from "./blogs/pages/UpdateBlog";
import DeleteBlog from "./blogs/pages/DeleteBlog";
import Profile from "./shared/components/user/Profile";
import Blogs from "./blogs/pages/Blogs";
import CreateBlog from "./blogs/pages/CreateBlog";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: "1",
      username: "johndoe",
      title: "The Rise of AI",
      content:
        "Artificial Intelligence (AI) is rapidly transforming industries worldwide, from healthcare to finance. Its potential to revolutionize traditional processes is vast, allowing businesses to automate tasks, make smarter decisions, and enhance customer experiences. As AI continues to advance, we are seeing significant improvements in machine learning algorithms and natural language processing, enabling machines to interpret and respond to human input with unprecedented accuracy. The future of AI looks incredibly promising, offering new opportunities for innovation across various sectors, while also raising important ethical questions about its role in society and the workforce.",
      image:
        "https://i.pinimg.com/736x/fc/3c/3b/fc3c3beb4af61ec523602c3c22e929c8.jpg",
      date: "2024-11-21T08:30:00Z",
    },
    {
      id: "2",
      username: "janedoe",
      title: "The Evolution of Cybersecurity",
      content:
        "As technology continues to advance, the need for robust cybersecurity measures has never been more critical. With the rise of cloud computing, IoT devices, and increased connectivity, the digital landscape has become a prime target for cybercriminals. Cybersecurity experts are now turning to advanced methods such as AI and machine learning to detect and prevent potential threats in real-time. As cyber-attacks become more sophisticated, organizations must continuously evolve their defense strategies, investing in next-generation security tools and fostering a culture of awareness and preparedness within their teams. The future of cybersecurity will be shaped by continuous innovation and collaboration across industries.",
      image:
        "https://i.pinimg.com/736x/38/da/54/38da54be4b893c4abd062c400914a9de.jpg",
      date: "2024-11-20T14:45:00Z",
    },
    {
      id: "3",
      username: "techguru",
      title: "The Future of Web Dev",
      content:
        "Web development is evolving at a rapid pace, with new technologies and frameworks emerging regularly. Tools like WebAssembly and AI are revolutionizing how developers build websites and applications, making them faster and more efficient. WebAssembly allows for high-performance execution in web browsers, enabling complex tasks like gaming and video editing to be done directly in the browser. Meanwhile, AI-driven tools are enhancing the development process by automating repetitive tasks, improving user experiences, and offering more personalized interactions. As the web continues to grow and diversify, developers will need to adapt to these emerging technologies and leverage them to stay competitive in the industry.",
      image:
        "https://i.pinimg.com/enabled_lo_mid/736x/d1/3e/a9/d13ea97c612f36d4e8fb925546424ce5.jpg",
      date: "2024-11-18T11:00:00Z",
    },
    {
      id: "4",
      username: "devwizard",
      title: "Exploring Blockchain Beyond Crypto",
      content:
        "Blockchain technology, often associated with cryptocurrencies like Bitcoin, has far-reaching implications beyond the world of digital currencies. With its decentralized and secure nature, blockchain is being adopted across various industries to streamline processes, improve transparency, and enhance data security. From supply chain management to digital identity verification, blockchain is set to transform sectors such as healthcare, finance, and even government. As the technology matures, developers and businesses alike are exploring innovative ways to integrate blockchain into their operations, paving the way for a more secure and efficient digital future.",
      image:
        "https://i.pinimg.com/474x/e9/bf/45/e9bf455e42cbb5c763a897ba3b5f98b1.jpg",
      date: "2024-11-15T16:20:00Z",
    },
    {
      id: "5",
      username: "codingwizard",
      title: "The Importance of Open Source in Tech Innovation",
      content:
        "Open-source software has played a pivotal role in the rapid advancement of technology by fostering collaboration and innovation. With open-source communities growing across the globe, developers are able to share code, resources, and knowledge, accelerating the development of new tools and technologies. Projects like Linux, Apache, and Mozilla Firefox are prime examples of open-source contributions that have shaped the digital landscape. By embracing open-source development, companies not only reduce costs but also empower their teams to create more customizable and scalable solutions. As the tech industry continues to evolve, open-source collaboration will remain a cornerstone of innovation and progress.",
      image:
        "https://i.pinimg.com/736x/ec/44/ad/ec44ad5cc7be5bffc968926cccf19b95.jpg",
      date: "2024-11-10T09:00:00Z",
    },
  ]);

  // Function to add a new blog
  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Blogs blogs={blogs} />
          </Route>
          <Route path="/create-blog">
            <CreateBlog onAddBlog={addBlog} />
          </Route>
          <Route path="/blogs/update/:blogId" exact component={UpdateBlog}></Route>
          <Route path="/blogs/delete/:blogId" exact component={DeleteBlog}></Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
