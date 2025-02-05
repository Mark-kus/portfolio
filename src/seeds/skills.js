import HypertextMarkupLanguage from "@/components/portfolio/svgs/techonologies/HypertextMarkupLanguage";
import CascadeStyleSheets from "@/components/portfolio/svgs/techonologies/CascadeStyleSheets";
import JavaScript from "@/components/portfolio/svgs/techonologies/JavaScript";
import Python from "@/components/portfolio/svgs/techonologies/Python";
import ReactJS from "@/components/portfolio/svgs/techonologies/ReactJS";
import FastAPI from "@/components/portfolio/svgs/techonologies/FastAPI";
import Docker from "@/components/portfolio/svgs/techonologies/Docker";
import Kubernetes from "@/components/portfolio/svgs/techonologies/Kubernetes";
import AmazonWebServices from "@/components/portfolio/svgs/techonologies/AmazonWebServices";
import StructuredQueryLanguage from "@/components/portfolio/svgs/techonologies/StructuredQueryLanguage";

const skills = [
  {
    component: <HypertextMarkupLanguage />,
    name: "HTML",
  },
  {
    component: <CascadeStyleSheets />,
    name: "CSS",
  },
  {
    component: <JavaScript />,
    name: "JavaScript",
  },
  {
    component: <ReactJS />,
    name: "React",
  },
  {
    component: <Python />,
    name: "Python",
  },
  {
    component: <FastAPI />,
    name: "FastAPI",
  },
  {
    component: <Docker />,
    name: "Docker",
  },
  {
    component: <Kubernetes />,
    name: "Kubernetes",
  },
  {
    component: <AmazonWebServices />,
    name: "AWS",
  },
  {
    component: <StructuredQueryLanguage />,
    name: "SQL",
  }
];

export default skills;
