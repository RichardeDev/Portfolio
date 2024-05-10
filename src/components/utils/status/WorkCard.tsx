import { Badge } from "@/components/ui/badge";
import { WorkProps } from "@/type/status-type";
import Link from "next/link";

const WorkCard = (props: WorkProps) => {
    return (
      <Link
        href={props.link}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      >
        <img
          src={props.Logo}
          alt={props.title}
          className="w-10 h-10 object-contain rounded-md"
        />
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.title}</p>
            {props.freelance && (
              <Badge variant="outline" className="text-sm text-muted-foreground">
                Mission
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{props.role}</p>
        </div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </Link>
    );
  };

  export default WorkCard;