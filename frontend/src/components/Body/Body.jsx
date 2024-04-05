import Group from './Content/Group/Group'
import Mission from './Content/Mission/Mission'
import Podcast from './Content/Podcast/Podcast'
import './Body.css'

function getContent(content) {
  switch (content) {
    case 0: return <Mission />;
    case 1: return <Group />;
    case 2: return <Podcast />;
    default: return null;
  };
}

export default function Body({ content }) {
  return (
    <div className="body">
      {getContent(content)}
    </div>
  );
}

