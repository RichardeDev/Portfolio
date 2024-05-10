import { SideProjectProps } from "@/type/status-type";
import Link from "next/link";

const SideProject = (props: SideProjectProps) => {
    return (
      <Link
        href={props.link}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      >
        <span className="bg-accent text-accent-foreground p-3 rounded-sm ">
          <props.Logo size={16} />
        </span>
        <div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
      </Link>
    );
  };

  export default SideProject;