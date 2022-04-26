import {useParams} from 'react-router-dom'
import ProjectItem from '../components/ProjectItem';

const projects = [
  {
    id: "p1",
    title: "refresh your style",
    collobrators: ["yigit tuncel, mario rodriguez, christina borensky"],
    images: ['/images/refreshDesktop.png', '/images/refreshMobile.png'],
    description: 'A second-hand clothes marketplace focused on a personal brand with photos of the seller styling the items that they want to trade.',
    stacks: ['javascript', 'ruby on rails', 'stimulusjs', 'chat', 'postgresql', 'actioncable', 'bootstrap', 'css', 'websocket', 'cloudinary', 'heroku']
  },
  {
    id: "p2",
    title: "city stroll",
    collobrators: ["yigit tuncel, mario rodriguez, christina borensky"],
    description: 'A second-hand clothes marketplace focused on a personal brand with photos of the seller styling the items that they want to trade.',
    stacks: ['javascript', 'ruby on rails', 'stimulusjs', 'chat', 'postgresql', 'actioncable', 'bootstrap', 'css', 'websocket', 'cloudinary', 'heroku']
  },
  {
    id: "p3",
    title: "personal website",
    collobrators: ["yigit tuncel, mario rodriguez, christina borensky"],
    description: 'A second-hand clothes marketplace focused on a personal brand with photos of the seller styling the items that they want to trade.',
    stacks: ['javascript', 'ruby on rails', 'stimulusjs', 'chat', 'postgresql', 'actioncable', 'bootstrap', 'css', 'websocket', 'cloudinary', 'heroku']
  },
];

const ProjectDetail = (props) => {
  const params = useParams()
  const project = projects.find(project => project.id === params.projectId)
  console.log(project);

  return (
    <ProjectItem project={project}/>
  )
}

export default ProjectDetail;
