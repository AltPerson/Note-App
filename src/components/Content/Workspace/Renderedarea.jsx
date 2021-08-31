import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Renderedarea({ time, text }) {
  console.log(text);
  return (
    <div className="workspace-renderarea">
      <h5 className="workspace-renderarea__time">
        {time.toString().substr(0, 24)}
      </h5>
      <ReactMarkdown
        className="workspace-renderarea__text"
        children={text}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
}

export default Renderedarea;
